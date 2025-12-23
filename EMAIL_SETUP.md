# Email Setup Instructions

This project uses Nodemailer to send contact form submissions via email.

## Environment Variables Required

Create a `.env.local` file in the root directory with the following variables:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password-here
```

## Gmail Setup Instructions

1. **Enable 2-Step Verification** on your Google Account
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification if not already enabled

2. **Generate an App Password**
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" as the app
   - Select "Other (Custom name)" as the device
   - Enter "SJS Oil Website" as the name
   - Click "Generate"
   - Copy the 16-character password (spaces don't matter)

3. **Add to .env.local**
   - Create `.env.local` in the root directory
   - Add your Gmail address to `EMAIL_USER`
   - Add the generated app password to `EMAIL_PASSWORD`

## Example .env.local file:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

**Important Notes:**
- Use your Gmail address (the one that will send emails)
- Use the App Password, NOT your regular Gmail password
- Never commit `.env.local` to version control (it's already in .gitignore)
- The email will be sent to: `myenumam@gmail.com`

## Testing

After setting up the environment variables, restart your development server:

```bash
npm run dev
```

Then test the contact form to ensure emails are being sent correctly.

