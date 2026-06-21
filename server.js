require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Validate email configuration on startup
if (!process.env.SMTP_HOST && (!process.env.EMAIL_USER || process.env.EMAIL_USER.includes('your-email'))) {
  console.warn('⚠️  WARNING: No SMTP_HOST and EMAIL_USER not configured. Please set SMTP or EMAIL credentials in .env.');
}

// If SendGrid API key is present, prefer SendGrid (API) for sending emails
let useSendGrid = false;
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  useSendGrid = true;
  console.log('ℹ️  Using SendGrid API for email delivery');
}

// Build transporter options: prefer explicit SMTP settings, otherwise use provider + auth
let transporter;
if (!useSendGrid && process.env.SMTP_HOST) {
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: process.env.SMTP_USER || process.env.EMAIL_USER,
      pass: process.env.SMTP_PASS || process.env.EMAIL_PASSWORD,
    },
  });
  console.log('ℹ️  Using SMTP host:', process.env.SMTP_HOST);
} else if (!useSendGrid) {
  transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  console.log('ℹ️  Using email service:', process.env.EMAIL_SERVICE || 'gmail');
}

// Email sending endpoint
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, company, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    // If using SendGrid, we don't require EMAIL_USER placeholders; otherwise validate SMTP/email credentials
    if (!useSendGrid) {
      if (!transporter) {
        return res.status(400).json({ error: 'Server email is not configured. Please set SMTP or EMAIL credentials in .env.' });
      }
      if (process.env.EMAIL_USER && process.env.EMAIL_USER.includes('your-email')) {
        return res.status(400).json({ error: 'Server email is not configured. Please check the server .env file for EMAIL_USER.' });
      }
      if (process.env.EMAIL_PASSWORD && process.env.EMAIL_PASSWORD.includes('your-app-password')) {
        return res.status(400).json({ error: 'Server email is not configured. Please check the server .env file for EMAIL_PASSWORD.' });
      }
    }

    // Compose email
    const mailOptions = {
      from: process.env.SENDGRID_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `${name}${service ? ' — ' + service : ''} - Website Enquiry`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Service of Interest:</strong> ${service || 'N/A'}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email (SendGrid API preferred if configured)
    if (useSendGrid) {
      const msg = {
        to: process.env.EMAIL_TO,
        from: process.env.SENDGRID_FROM || process.env.EMAIL_USER,
        replyTo: email,
        subject: `${name}${service ? ' — ' + service : ''} - Website Enquiry`,
        html: mailOptions.html,
      };
      const result = await sgMail.send(msg);
      console.log('✅ Email sent via SendGrid:', result[0] && result[0].statusCode ? result[0].statusCode : 'unknown');
    } else {
      const info = await transporter.sendMail(mailOptions);
      console.log('✅ Email sent successfully:', info.messageId);
    }

    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('❌ Email sending error:', error.message);
    res.status(500).json({ error: `Failed to send email: ${error.message}` });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`✅ Email server running on http://localhost:${PORT}`);
  console.log(`📧 Emails will be sent to: ${process.env.EMAIL_TO}`);
});
