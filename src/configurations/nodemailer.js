import nodemailer from 'nodemailer';
import config from 'config';

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.get('MAILER.email'),
        pass: config.get('MAILER.password'),
    },
});