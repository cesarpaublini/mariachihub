// src/app/api/save-lead/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('📥 Incoming Lead:', body);

    const {
      name,
      email,
      phone,
      city,
      event_date,
      start_time,
      occasion,
      package: packageType,
    } = body;

    const { data, error } = await supabase
      .from('leads')
      .insert([{
        name,
        email,
        phone,
        city,
        event_date,
        start_time,
        occasion,
        package: packageType,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('❌ Supabase insert error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log('✅ Lead saved:', data);
    return NextResponse.json({ message: 'Lead saved', data });

  } catch (err) {
    console.error('🔥 Unexpected server error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
