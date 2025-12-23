import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, phoneCode, state, district, description } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter
    // For Gmail, you'll need to use an App Password or OAuth2
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASSWORD, // Your Gmail App Password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'myenumam@gmail.com',
      subject: 'New Contact Form Submission - SJS Oil Website',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 8px;
              }
              .header {
                background-color: #4CAF50;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
                margin: -20px -20px 20px -20px;
              }
              .field {
                margin-bottom: 15px;
                padding: 10px;
                background-color: #f9f9f9;
                border-left: 4px solid #4CAF50;
              }
              .label {
                font-weight: bold;
                color: #555;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                color: #333;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
                <p>SJS Oil Website - Contact Form</p>
              </div>
              
              <div class="field">
                <span class="label">Name:</span>
                <span class="value">${name}</span>
              </div>
              
              <div class="field">
                <span class="label">Email:</span>
                <span class="value">${email}</span>
              </div>
              
              <div class="field">
                <span class="label">Phone:</span>
                <span class="value">${phoneCode} ${phone}</span>
              </div>
              
              ${state ? `
              <div class="field">
                <span class="label">State:</span>
                <span class="value">${state}</span>
              </div>
              ` : ''}
              
              ${district ? `
              <div class="field">
                <span class="label">District:</span>
                <span class="value">${district}</span>
              </div>
              ` : ''}
              
              ${description ? `
              <div class="field">
                <span class="label">Description/Message:</span>
                <span class="value">${description.replace(/\n/g, '<br>')}</span>
              </div>
              ` : ''}
              
              <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
              <p style="color: #777; font-size: 12px; text-align: center;">
                This email was sent from the SJS Oil Website contact form.
              </p>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission - SJS Oil Website

Name: ${name}
Email: ${email}
Phone: ${phoneCode} ${phone}
${state ? `State: ${state}` : ''}
${district ? `District: ${district}` : ''}
${description ? `Description: ${description}` : ''}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

