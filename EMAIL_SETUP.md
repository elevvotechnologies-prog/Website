# Email Configuration Guide

The contact form requires Gmail credentials to send emails. Follow these steps to set it up:

## Step 1: Enable 2-Factor Authentication on Gmail

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Sign in to your Gmail account if prompted
3. Find **2-Step Verification** and enable it
4. Follow Google's instructions to set it up with your phone

## Step 2: Generate an App-Specific Password

1. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
2. Select **Mail** and **Windows Computer** (or your device)
3. Google will generate a 16-character password (looks like: `abcd efgh ijkl mnop`)
4. Copy this password (without spaces)

## Step 3: Update `.env` File

Edit the `.env` file in the project root:

```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-actual-email@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
EMAIL_TO=contact@elevvotech.com
```

- Replace `your-actual-email@gmail.com` with your Gmail address
- Replace `abcdefghijklmnop` with the 16-character password from Step 2
- `EMAIL_TO` is where form submissions will be sent

## Step 4: Run the Backend Server

```bash
# Terminal 1: Start the email server
npm run server

# Terminal 2: Start the frontend
npm start
```

Or run both together:
```bash
npm run dev
```

## Step 5: Test the Contact Form

1. Fill out the contact form with test data
2. Click "Send Message"
3. You should receive an email at the address specified in `EMAIL_TO`
4. The sender's email will be in the `replyTo` field so you can respond directly

## Troubleshooting

**Error: "Server email is not configured"**
- Make sure you've updated `.env` with real Gmail credentials
- Restart the server after updating `.env`

**Email not sending but no error**
- Check that the backend server is running on `http://localhost:5000`
- Verify the email and password in `.env` are correct
- Check the terminal console for error messages

**Gmail rejected the password**
- Make sure you're using an **app-specific password** (16 characters), not your regular Gmail password
- 2-factor authentication must be enabled first
- Try generating a new app password and update `.env`

## Alternative Email Services

You can also use other SMTP services by changing the `EMAIL_SERVICE` in `.env`:
- `EMAIL_SERVICE=outlook` (Outlook/Hotmail)
- `EMAIL_SERVICE=yahoo` (Yahoo Mail)
- Or configure a custom SMTP server

For custom SMTP configuration, modify `server.js` and use the `host`, `port`, and `secure` options in the transporter config.
