# EmailJS Setup Guide for The Technology Fiction Website

This guide will help you set up EmailJS to handle contact form submissions from your website.

## Step 1: Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create an Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```html
Subject: {{subject}}

Hello {{to_name}},

You have received a new contact form submission from the {{website_source}}:

**Name:** {{from_name}}
**Email:** {{from_email}}
**Message:** {{message}}

**Source:** {{website_source}}

Best regards,
{{to_name}}
```

4. Note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key
1. Go to "Account" → "API Keys" in your EmailJS dashboard
2. Copy your **Public Key** (it will look like a long string of letters and numbers)

## Step 5: Update Your Website Code
1. Open `src/components/sections/Contact.jsx`
2. Replace the placeholder values with your actual credentials:

```javascript
const result = await emailjs.send(
  'service_n22qsrq',        // Replace with your actual Service ID
  'template_akdqils',       // Replace with your actual Template ID
  templateParams,
  '6ICiKx6wEuxS-3WZ5'         // Replace with your actual Public Key
)
```

## Step 6: Test the Contact Form
1. Start your development server: `npm run dev`
2. Go to the contact section of your website
3. Fill out and submit the contact form
4. Check your email to see if the message was received

## Troubleshooting

### "Public Key is invalid" Error
- Make sure you're using the Public Key from "Account → API Keys" (not the Service ID or Template ID)
- The Public Key is a long string that looks like: `user_abc123def456ghi789`
- Double-check that you copied the entire key correctly

### "Service ID not found" Error
- Verify your Service ID is correct
- Make sure your email service is properly connected
- Check that the service is active in your EmailJS dashboard

### "Template ID not found" Error
- Verify your Template ID is correct
- Make sure the template variables match exactly: `{{from_name}}`, `{{from_email}}`, `{{message}}`, etc.
- Check that the template is published and active

## Important Notes
- The free plan allows 200 emails per month
- Make sure to test the form thoroughly before going live
- Keep your credentials secure and don't share them publicly

## Option 2: Alternative Solutions

### Netlify Forms (If deploying to Netlify)
If you're deploying to Netlify, you can use their built-in form handling:

1. Add `data-netlify="true"` to your form
2. Add a hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. Netlify will automatically handle form submissions

### Formspree (Alternative to EmailJS)
1. Go to [https://formspree.io/](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Replace the form action with your Formspree endpoint

## Testing the Form

Once configured:
1. Fill out the contact form
2. Submit the form
3. Check your email for the submission
4. You should see a success message on the website

## Troubleshooting

- **Form not sending**: Check your EmailJS credentials
- **Emails not received**: Check spam folder and email service settings
- **Console errors**: Check browser console for detailed error messages

## Security Notes

- The EmailJS public key is safe to expose in frontend code
- Consider adding rate limiting to prevent spam
- You can set up email notifications for form submissions

## Free Tier Limits

- EmailJS: 200 emails/month on free tier
- Formspree: 50 submissions/month on free tier
- Netlify: 100 submissions/month on free tier 