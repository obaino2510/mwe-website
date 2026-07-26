# Quick Netlify Setup

## ✅ What's Been Done

1. **Netlify Function Created** - `netlify/functions/contact.js`
   - Handles contact form submissions
   - Sends emails via SendGrid
   - Serverless - no backend server needed!

2. **Netlify Configuration** - `netlify.toml`
   - Build settings configured
   - Functions directory set
   - Redirects for SPA routing

3. **Contact Form Updated** - `src/views/ContactUs.vue`
   - Uses `/.netlify/functions/contact` endpoint
   - Works in both development and production

4. **Development Setup** - `npm run dev`
   - Uses Netlify CLI to simulate Netlify environment locally
   - Functions work exactly like in production

## 🚀 Deploy to Netlify

### Quick Steps:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add Netlify functions for contact form"
   git push
   ```

2. **Connect to Netlify:**
   - Go to https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Netlify auto-detects settings from `netlify.toml` ✅

3. **Add Environment Variables:**
   In Netlify dashboard → Site settings → Environment variables → Add:
   ```
   EMAIL_API_KEY = your_sendgrid_api_key_here
   EMAIL_PROVIDER = sendgrid
   SENDER_EMAIL = mathematicsworld2017@gmail.com
   ```
   
   **IMPORTANT:** Get your API key from your `.env` file - DO NOT commit it to Git!

4. **Deploy!**
   - Click "Deploy site"
   - Wait for build to complete
   - Your site is live! 🎉

## 🧪 Test Locally

```bash
npm run dev
```

Visit: http://localhost:8888/contact-us

## 📧 Important: SendGrid Verification

Before the contact form works, **verify your sender email** in SendGrid:

1. Go to https://app.sendgrid.com/
2. Navigate to: Settings → Sender Authentication
3. Verify: `mathematicsworld2017@gmail.com`

Without verification, emails won't send!

## 📁 Project Structure

```
mwe-website/
├── netlify/
│   └── functions/
│       └── contact.js          # Serverless function
├── netlify.toml                # Netlify config
├── src/
│   └── views/
│       └── ContactUs.vue       # Contact form
└── .env                        # Local environment variables (not committed)
```

## 🔧 Environment Variables

**Local (.env file):**
```
EMAIL_API_KEY=your_sendgrid_api_key_here
EMAIL_PROVIDER=sendgrid
SENDER_EMAIL=mathematicsworld2017@gmail.com
```

**Production (Netlify Dashboard):**
- Same variables, set in: Site settings → Environment variables
- Get your actual API key from your local `.env` file

## ✨ Benefits of Netlify Functions

- ✅ No separate backend server to manage
- ✅ Automatic scaling
- ✅ Free tier includes 125,000 function requests/month
- ✅ Secure - API keys never exposed to frontend
- ✅ Works the same locally and in production
- ✅ Deploy with just `git push`

## 📞 Support

If you encounter issues:
1. Check Netlify Functions logs in dashboard
2. Verify environment variables are set
3. Ensure SendGrid sender email is verified
4. Review `DEPLOYMENT.md` for detailed troubleshooting
