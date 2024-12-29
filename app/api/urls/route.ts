import { NextResponse } from 'next/server';
import { UrlService } from '@/lib/services/url.service';
import { nanoid } from 'nanoid';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();
    const code = nanoid(6);
    
    const result = await UrlService.create(code, url);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create short URL' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json(
      { error: 'Code is required' },
      { status: 400 }
    );
  }

  try {
    const result = await UrlService.getByCode(code);
    if (!result) {
      return NextResponse.json(
        { error: 'URL not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch URL' },
      { status: 500 }
    );
  }
}