# Deployment Setup Guide

## 🚀 **Vercel Deployment Setup**

### 1. **Environment Variables in Vercel**

After deploying to Vercel, you need to set up environment variables:

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:

```
GMAIL_USER=seifrh.contact@gmail.com
GMAIL_APP_PASSWORD=your-gmail-app-password
```

### 2. **Gmail App Password Setup**

If you haven't already:
1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security**
3. Enable **2-Step Verification** if not already enabled
4. Go to **App passwords** (under 2-Step Verification)
5. Select **Mail** as the app and **Other** as the device
6. Generate the app password
7. Copy the 16-character password

### 3. **Verify Deployment**

After setting up environment variables:
1. Redeploy your application in Vercel
2. Test the contact form on your live site
3. Check that emails are received at `seif2000rahmouni@gmail.com`

## 🔒 **Security Notes**

- ✅ `.env.local` is in `.gitignore` - credentials won't be pushed to GitHub
- ✅ Hardcoded credentials have been removed from the code
- ✅ Environment variables are properly validated
- ✅ Error messages don't expose sensitive information

## 📧 **Email Format**

When someone submits the contact form, you'll receive:
- **To**: `seif2000rahmouni@gmail.com`
- **Subject**: `[IMPORTANT - Portfolio] **User Name** want to reach you via Portfolio`
- **Content**: Formatted HTML email with user details and message

## 🛠 **Troubleshooting**

If emails don't work in production:
1. Check Vercel environment variables are set correctly
2. Verify Gmail App Password is valid
3. Check Vercel function logs for errors
4. Ensure 2-Step Verification is enabled on Gmail account 