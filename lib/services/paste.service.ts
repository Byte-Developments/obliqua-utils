import { supabase } from '@/lib/supabase/client';
import { cache } from 'react';
import { PasteNotFoundError } from '@/lib/errors';
import type { Database } from '@/lib/supabase/types';

type Paste = Database['public']['Tables']['pastes']['Row'];
type PasteInsert = Database['public']['Tables']['pastes']['Insert'];

export class PasteService {
  static create = cache(async (data: {
    content: string;
    title?: string;
    language?: string;
    expiresAt?: Date;
    burnAfterRead?: boolean;
  }): Promise<Paste> => {
    try {
      const { data: paste, error } = await supabase
        .from('pastes')
        .insert({
          content: data.content,
          title: data.title,
          language: data.language,
          expires_at: data.expiresAt?.toISOString(),
          burn_after_read: data.burnAfterRead,
        } satisfies PasteInsert)
        .select()
        .single();

      if (error) throw error;
      if (!paste) throw new Error('Failed to create paste');
      
      return paste;
    } catch (error) {
      console.error('Failed to create paste:', error);
      throw new Error('Failed to create paste');
    }
  });

  static getById = cache(async (id: string): Promise<Paste> => {
    try {
      const { data: paste, error } = await supabase
        .from('pastes')
        .select()
        .eq('id', id)
        .maybeSingle();

      if (error) throw error;
      if (!paste) throw new PasteNotFoundError();

      if (paste.burn_after_read) {
        await supabase
          .from('pastes')
          .update({ viewed: true })
          .eq('id', id);
      }

      return paste;
    } catch (error) {
      if (error instanceof PasteNotFoundError) throw error;
      console.error('Failed to fetch paste:', error);
      throw new Error('Failed to fetch paste');
    }
  });
}