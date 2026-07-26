# Email Deliverability Guide

## ✅ Good News!
Your contact form is working! Emails are being sent successfully via SendGrid. They're currently landing in spam, which is common for new sending addresses. Follow these steps to improve deliverability.

## 🔧 Steps to Improve Email Deliverability

### 1. **Domain Authentication (Most Important)**

Instead of sending from `mathematicsworld2017@gmail.com`, you should send from your own domain (e.g., `info@mwe.com.ng` or `noreply@mwe.com.ng`).

**Why?** Gmail/Yahoo/Outlook flag emails from Gmail addresses sent via third-party services as suspicious.

**Setup:**
1. Go to SendGrid → Settings → Sender Authentication
2. Click "Authenticate Your Domain"
3. Follow the wizard to add DNS records to your domain
4. Once verified, update your `.env` file:
   ```
   SENDER_EMAIL=info@yourdomain.com
   ```

### 2. **Verify Your Sender Email**

Make sure your current sender email is verified:
1. SendGrid → Settings → Sender Authentication → Single Sender Verification
2. Add and verify `mathematicsworld2017@gmail.com`
3. Check the verification email in your inbox

### 3. **Use a Professional "From" Name**

Update the Netlify function to include a friendly sender name:

```javascript
from: {
  email: process.env.SENDER_EMAIL,
  name: 'MWE Website'
}
```

### 4. **Warm Up Your Sending Reputation**

- Start by sending a few emails per day
- Gradually increase volume over 2-4 weeks
- Don't send hundreds of emails immediately

### 5. **Mark as "Not Spam"**

- Go to your spam folder
- Mark the email as "Not Spam" or "Not Junk"
- This helps train Gmail's filters for your domain

### 6. **Enable Link Tracking (Optional)**

In SendGrid settings, enable:
- Click Tracking
- Open Tracking

This helps SendGrid build your sender reputation.

## 📧 Better Email Configuration

I can update your function to use domain-based sending once you:
1. Own a domain (e.g., mwe.com.ng)
2. Set up domain authentication in SendGrid
3. Create an email address on that domain

## 🎯 Quick Wins (Do These Now)

1. **Add SPF and DKIM records** via SendGrid's domain authentication
2. **Use a custom domain email** instead of Gmail
3. **Keep your API key secure** (never share or commit to Git)
4. **Monitor SendGrid's Email Activity** dashboard for delivery issues

## ⚠️ Why Gmail Addresses Get Flagged

When you send from `@gmail.com` via SendGrid:
- Gmail sees the email didn't come from Gmail's servers
- This triggers spam filters
- Using your own domain solves this

## 📊 Check Your Sender Score

Visit: https://www.senderscore.org/
- Enter your sending domain
- Score above 90 = good deliverability
- Below 70 = likely spam folder

## 🚀 Production Deployment

When you deploy to Netlify:
1. Add environment variables in Netlify dashboard
2. Use your domain-authenticated email as sender
3. Monitor SendGrid activity feed for bounces/spam reports

## 📱 Testing

For now, to test the contact form:
1. Check your spam folder after each submission
2. Mark as "Not Spam"
3. Over time, emails will start arriving in inbox

## Need Help?

If you have a custom domain, I can help you:
1. Set up domain authentication
2. Update the contact form to use your domain email
3. Configure DNS records

Just let me know your domain name!
