# Netlify Deployment Guide

This project is configured for deployment on Netlify with serverless functions for the contact form.

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env` file in the root directory (already exists):
   ```
   EMAIL_API_KEY=your_sendgrid_api_key
   EMAIL_PROVIDER=sendgrid
   SENDER_EMAIL=mathematicsworld2017@gmail.com
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   
   This will start:
   - Vite dev server (frontend) on http://localhost:8888
   - Netlify Functions (backend) available at `/.netlify/functions/*`

4. **Test the contact form:**
   - Navigate to http://localhost:8888/contact-us
   - Fill out and submit the form
   - Check your email inbox

## Netlify Deployment

### Option 1: Deploy via Netlify UI (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Connect to Netlify:**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Netlify will auto-detect the settings from `netlify.toml`

3. **Add Environment Variables:**
   - In Netlify dashboard: Site settings → Environment variables
   - Add the following variables:
     - `EMAIL_API_KEY` = your SendGrid API key
     - `EMAIL_PROVIDER` = sendgrid
     - `SENDER_EMAIL` = mathematicsworld2017@gmail.com

4. **Deploy:**
   - Netlify will automatically build and deploy
   - Your site will be live at `https://your-site-name.netlify.app`

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI globally (if not already installed):**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Initialize the site:**
   ```bash
   netlify init
   ```

4. **Set environment variables:**
   ```bash
   netlify env:set EMAIL_API_KEY "your_sendgrid_api_key"
   netlify env:set EMAIL_PROVIDER "sendgrid"
   netlify env:set SENDER_EMAIL "mathematicsworld2017@gmail.com"
   ```

5. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

## Important Notes

### SendGrid Setup
- The email `mathematicsworld2017@gmail.com` **must be verified** in your SendGrid account
- Go to SendGrid → Settings → Sender Authentication
- Verify your sender email before deployment

### Environment Variables
- **NEVER commit the `.env` file** to Git (it's already in `.gitignore`)
- Always set environment variables in Netlify dashboard for production
- The API key in `.env` is only for local development

### Build Settings (in netlify.toml)
```toml
[build]
  command = "npm run build"
  publish = "dist"
  functions = "netlify/functions"
```

### Custom Domain
- After deployment, you can add a custom domain in Netlify dashboard
- Netlify provides free SSL certificates

## Testing in Production

After deployment, test the contact form:
1. Visit `https://your-site-name.netlify.app/contact-us`
2. Submit a test message
3. Check that the email arrives at `mathematicsworld2017@gmail.com`

## Troubleshooting

### Function not working
- Check Netlify Functions logs: Site settings → Functions → View logs
- Verify environment variables are set correctly
- Ensure SendGrid API key is valid and has send permissions

### Emails not sending
- Verify sender email in SendGrid dashboard
- Check SendGrid activity logs
- Ensure API key has "Mail Send" permissions

### Build fails
- Check Node version (should be 18 or higher)
- Run `npm run build` locally to test
- Check Netlify build logs for errors

## Architecture

```
Frontend (Vue + Vite)
    ↓
Netlify Function (/.netlify/functions/contact)
    ↓
SendGrid API
    ↓
Your Email Inbox
```

The contact form sends a POST request to `/.netlify/functions/contact`, which is a serverless function that runs on Netlify's infrastructure. No separate backend server needed!
