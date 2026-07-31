import sgMail from '@sendgrid/mail';

// Configure SendGrid
sgMail.setApiKey(process.env.EMAIL_API_KEY);

export const handler = async (event) => {
  console.log('Contact function called');
  console.log('Environment check:', {
    hasApiKey: !!process.env.EMAIL_API_KEY,
    hasSenderEmail: !!process.env.SENDER_EMAIL,
    senderEmail: process.env.SENDER_EMAIL
  });

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const { name, organization, email, phone, category, service, message } = JSON.parse(event.body);
    console.log('Form data received:', { name, email, organization, category, service, phone: !!phone, message: message?.substring(0, 50) });

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          error: 'Name, email, and message are required fields',
        }),
      };
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          error: 'Invalid email address',
        }),
      };
    }

    // Prepare email content
    const emailContent = {
      to: process.env.SENDER_EMAIL, // Your company email
      from: process.env.SENDER_EMAIL, // Must be verified in SendGrid
      replyTo: email, // User's email for replies
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5; }
            .email-container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
            .header { background: linear-gradient(135deg, #0a1929 0%, #1a2f4a 100%); padding: 30px 20px; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; }
            .header p { color: #b8c5d6; margin: 10px 0 0 0; font-size: 14px; }
            .content { padding: 40px 30px; }
            .label { font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; font-weight: 600; }
            .value { font-size: 16px; color: #1a2f4a; margin-bottom: 25px; padding: 10px 15px; background-color: #f9f9f9; border-radius: 5px; border-left: 3px solid #d9202a; }
            .message-box { background-color: #f9f9f9; padding: 20px; border-radius: 5px; border-left: 3px solid #d9202a; margin-top: 10px; }
            .message-text { color: #333; line-height: 1.6; white-space: pre-wrap; margin: 0; }
            .footer { background-color: #0a1929; color: #b8c5d6; padding: 30px 20px; text-align: center; }
            .footer-title { font-size: 14px; font-weight: 600; color: #ffffff; margin: 0 0 10px 0; }
            .footer-info { font-size: 12px; margin: 5px 0; color: #8b98a8; }
            .footer-link { color: #d9202a; text-decoration: none; }
            .divider { height: 1px; background-color: #e0e0e0; margin: 30px 0; }
          </style>
        </head>
        <body>
          <div class="email-container">
            <!-- Header -->
            <div class="header">
              <h1>New Contact Form Submission</h1>
              <p>Someone has reached out via your website</p>
            </div>
            
            <!-- Content -->
            <div class="content">
              <div class="label">Full Name</div>
              <div class="value">${name}</div>
              
              ${organization ? `
                <div class="label">Organisation / Institution</div>
                <div class="value">${organization}</div>
              ` : ''}
              
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${email}" style="color: #d9202a; text-decoration: none;">${email}</a></div>
              
              ${phone ? `
                <div class="label">Phone Number</div>
                <div class="value"><a href="tel:${phone}" style="color: #d9202a; text-decoration: none;">${phone}</a></div>
              ` : ''}
              
              ${category ? `
                <div class="label">I Am A</div>
                <div class="value">${category}</div>
              ` : ''}
              
              ${service ? `
                <div class="label">Service Interested In</div>
                <div class="value">${service}</div>
              ` : ''}
              
              <div class="divider"></div>
              
              <div class="label">Message</div>
              <div class="message-box">
                <p class="message-text">${message}</p>
              </div>
            </div>
            
            <!-- Footer -->
            <div class="footer">
              <p class="footer-title">Mathematics World of Excellence</p>
              <p class="footer-info">Lagos & Awka, Nigeria</p>
              <p class="footer-info">
                <a href="mailto:info@mwe.com.ng" class="footer-link">info@mwe.com.ng</a> | 
                <a href="tel:+2340000000000" class="footer-link">+234 000 000 0000</a>
              </p>
              <p class="footer-info" style="margin-top: 20px; font-size: 11px;">
                This email was automatically generated from the MWE website contact form.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
NEW CONTACT FORM SUBMISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

From: ${name}${organization ? `\nOrganisation: ${organization}` : ''}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${category ? `Category: ${category}` : ''}
${service ? `Service Interested In: ${service}` : ''}

MESSAGE:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Mathematics World of Excellence
Lagos & Awka, Nigeria
info@mwe.com.ng | +234 000 000 0000
      `.trim(),
    };

    console.log('Attempting to send email via SendGrid...');
    console.log('Email config:', {
      to: emailContent.to,
      from: emailContent.from,
      replyTo: emailContent.replyTo,
      subject: emailContent.subject
    });

    // Send email using SendGrid
    const response = await sgMail.send(emailContent);
    console.log('SendGrid response:', response[0].statusCode);

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Your message has been sent successfully! We will get back to you soon.',
      }),
    };

  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));

    // Handle SendGrid specific errors
    if (error.response) {
      console.error('SendGrid Error Body:', JSON.stringify(error.response.body, null, 2));
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          error: 'Failed to send email. Please try again later.',
          details: error.response.body
        }),
      };
    }

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: 'An error occurred while sending your message. Please try again later.',
        details: error.message
      }),
    };
  }
};
