# olee-send-email

A simple Node.js library for sending emails using Nodemailer.

## Installation

To install the package, run the following command:

```bash
npm install olee-send-email
```
### Configuration and Usage
To use the olee-send-email package in your project, follow these steps:

Import the sendEmail function into your project:

```js
const { sendEmail } = require('olee-send-email');
```
Use the sendEmail function to send an email. Here is an example:


```js
sendEmail({
    to: 'recipient@example.com',
    subject: 'Test Email',
    text: 'This is a test email.',
}).then(() => {
    console.log('Email sent successfully!');
}).catch((error) => {
    console.error('Error sending email:', error);
});

```
### Environment Variables
Make sure to set the following environment variables in your .env file:

```bash
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
EMAIL_PORT=465
EMAIL_SECURE=true
EMAIL_CONNECTION_TIMEOUT=5000
EMAIL_MAX_CONNECTIONS=5
```

