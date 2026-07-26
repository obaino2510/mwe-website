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
    const { name, email, phone, message } = JSON.parse(event.body);
    console.log('Form data received:', { name, email, phone: !!phone, message: message?.substring(0, 50) });

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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d9202a;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from the MWE website contact form.
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        ${phone ? `Phone: ${phone}` : ''}
        
        Message:
        ${message}
      `,
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
