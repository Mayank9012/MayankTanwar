# Portfolio Contact Form Setup with Gmail

This portfolio website uses Netlify Functions to handle contact form submissions and send emails via Gmail SMTP.

## 🚀 Deployment Setup

### 1. Gmail App Password Setup

Before deploying to Netlify, you need to set up a Gmail App Password:

1. **Enable 2-Factor Authentication** on your Gmail account if not already enabled
2. Go to [Google Account Settings](https://myaccount.google.com/)
3. Navigate to **Security** → **2-Step Verification**
4. Scroll down to **App passwords**
5. Generate a new app password for "Mail"
6. Copy the 16-character password (this will be your `GMAIL_APP_PASSWORD`)

### 2. Netlify Environment Variables

In your Netlify dashboard, go to **Site settings** → **Environment variables** and add:

```
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
```

**Important:** 
- Use your actual Gmail address for `GMAIL_USER`
- Use the App Password (not your regular Gmail password) for `GMAIL_APP_PASSWORD`
- Never commit these values to your repository

### 3. Deploy to Netlify

1. **Connect your repository** to Netlify
2. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy** your site

## 📧 How it Works

### Frontend (Contact.tsx)
- Form submits to `/.netlify/functions/send-email`
- Shows loading state during submission
- Displays success/error messages to user

### Backend (Netlify Function)
- Receives form data via POST request
- Validates email format and required fields
- Sends two emails:
  1. **To you:** Notification with contact details and message
  2. **To sender:** Automated thank you response
- Returns appropriate status codes and messages

### Email Features
- ✅ Professional HTML email templates
- ✅ Auto-reply to form submitters
- ✅ Detailed contact information formatting
- ✅ Timestamp with Indian timezone
- ✅ CORS headers for cross-origin requests
- ✅ Input validation and error handling

## 🛠️ Local Development

For local testing (optional):

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Create `.env` file in project root:
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-app-password
   ```

3. Run locally:
   ```bash
   netlify dev
   ```

## 🔒 Security Features

- Email validation
- Required field validation
- CORS protection
- Rate limiting via Netlify
- Environment variable protection
- No sensitive data in client-side code

## 📱 Contact Information

The contact form will send emails to: **mayankt9043@gmail.com**

Users will receive an automated response confirming their message was received.

## 🚨 Troubleshooting

### Common Issues:

1. **"Authentication failed"**
   - Verify Gmail App Password is correct
   - Ensure 2FA is enabled on Gmail account

2. **"CORS errors"**
   - Check netlify.toml headers configuration
   - Verify function URL is correct

3. **"Function not found"**
   - Ensure netlify/functions directory exists
   - Check netlify.toml functions configuration

4. **"Environment variables not found"**
   - Verify variables are set in Netlify dashboard
   - Check variable names match exactly

### Testing Email Functionality:

1. Test with a real email address
2. Check spam folder for auto-reply
3. Verify Netlify function logs in dashboard
4. Test with different email services (Gmail, Yahoo, etc.)

## 📝 File Structure

```
portfolio/
├── netlify/
│   └── functions/
│       └── send-email.js          # Email sending function
├── src/
│   └── components/
│       └── Contact.tsx             # Contact form component
├── netlify.toml                    # Netlify configuration
└── package.json                    # Updated with nodemailer
```

## 🎯 Success Criteria

- ✅ Form submits successfully
- ✅ You receive notification emails
- ✅ Users receive auto-reply confirmation
- ✅ No console errors
- ✅ Professional email formatting
- ✅ Works on all devices/browsers