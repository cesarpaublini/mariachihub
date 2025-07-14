// src/app/api/save-contact-message/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('📥 Incoming Contact Message:', body);

    const {
      name,
      email,
      phone,
      subject,
      message,
    } = body;

    const { data, error } = await supabase
      .from('contact_messages')
      .insert([{
        name,
        email,
        phone,
        subject,
        message,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('❌ Supabase insert error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log('✅ Contact message saved:', data);
    return NextResponse.json({ message: 'Contact message saved', data });

  } catch (err) {
    console.error('🔥 Unexpected server error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 