// src/app/api/save-contact-message/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '../../../lib/supabaseClient';

const resend = new Resend(process.env.RESEND_API_KEY!); // Make sure this is in .env.local

export async function POST(req: Request) {
  const data = await req.json();
  const { name, email, phone, subject, message } = data;

  try {
    // 1. Send notification email
    await resend.emails.send({
      from: 'bookmariachi <info@bookmariachi.com>',
      to: 'cesar.paublini001@gmail.com',
      subject: '🎺 New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // 2. Save to Supabase
    const { error } = await supabase
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
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    // console.log('📥 Incoming Contact Message:', data); // Cleaned up console
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ Error sending email or saving to Supabase:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email or save message' }, { status: 500 });
  }
} 