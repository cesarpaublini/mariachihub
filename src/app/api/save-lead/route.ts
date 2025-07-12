// src/app/api/save-lead/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, city } = body;

  const { data, error } = await supabase
    .from('leads')
    .insert([{ name, email, phone, city, created_at: new Date().toISOString() }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Lead saved', data });
}
