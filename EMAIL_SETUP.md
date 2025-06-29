# Email Setup Instructions

To enable email functionality for the contact form, you need to set up Gmail credentials.

## Step 1: Create Environment File

Create a `.env.local` file in the root directory of your project with the following content:

```
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-gmail-app-password
```

## Step 2: Set Up Gmail App Password

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to "Security" tab
3. Enable "2-Step Verification" if not already enabled
4. Go to "App passwords" (under 2-Step Verification)
5. Select "Mail" as the app and "Other" as the device
6. Generate the app password
7. Copy the generated 16-character password

## Step 3: Update Environment Variables

Replace the values in your `.env.local` file:
- `GMAIL_USER`: Your Gmail address
- `GMAIL_APP_PASSWORD`: The 16-character app password you generated

## Step 4: Restart Development Server

After setting up the environment variables, restart your development server:

```bash
npm run dev
```

## How It Works

When a user submits the contact form:
1. The form data is sent to `/api/contact`
2. The API validates the data and sends an email to `seif2000rahmouni@gmail.com`
3. The email subject will be: "New message From [User Name] want to reach you via Portfolio"
4. The email contains the user's name, email, and message in a formatted HTML template

## Security Notes

- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- Use Gmail App Passwords instead of your regular password for security
- The email will be sent from your Gmail account to the specified recipient 