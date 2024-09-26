const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

dotenv.config({ path: '.env.local' });
 
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'edwigeakuzwe6@gmail.com', // Change this to your recipient
    subject: 'Test Email from Nodemailer',
    text: 'This is a test email sent using Nodemailer!',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error sending email:', error);
    }
    console.log('Email sent:', info.response);
});
