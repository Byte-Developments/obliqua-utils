import { supabase } from '@/lib/supabase/client';
import { cache } from 'react';
import { UrlNotFoundError } from '@/lib/errors';
import type { Database } from '@/lib/supabase/types';

type Url = Database['public']['Tables']['urls']['Row'];

export class UrlService {
  static create = cache(async (code: string, url: string): Promise<Url> => {
    try {
      const { data, error } = await supabase
        .from('urls')
        .insert({ code, url })
        .select()
        .single();

      if (error) throw error;
      if (!data) throw new Error('Failed to create URL');
      
      return data;
    } catch (error) {
      console.error('Failed to create short URL:', error);
      throw new Error('Failed to create short URL');
    }
  });

  static getByCode = cache(async (code: string): Promise<string> => {
    try {
      const { data, error } = await supabase
        .from('urls')
        .select('url')
        .eq('code', code)
        .maybeSingle();

      if (error) throw error;
      if (!data) throw new UrlNotFoundError();
      
      // TypeScript now knows data is not null here
      return data.url;
    } catch (error) {
      if (error instanceof UrlNotFoundError) throw error;
      console.error('Failed to fetch URL:', error);
      throw new Error('Failed to fetch URL');
    }
  });
}