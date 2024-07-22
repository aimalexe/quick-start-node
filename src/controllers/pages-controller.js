import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import pug from 'pug';

import { logger, transporter } from '../configurations/index.js';
import { getProjectName } from '../utilities/index.js';

// Get the home page
export const getHomePage = async (request, response) => {
    response.status(200).render('home', { title: getProjectName() });
};

// Get the about us page
export const getAboutUsPage = async (request, response) => {
    response.status(200).render('about-us', { title: getProjectName() });
};

// Get the contact us page
export const getContactUsPage = async (request, response) => {
    response.status(200).render('contact-us', { title: getProjectName() });
};

// Handle submission of the contact form
export const postContactUsEmailForm = async (request, response) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));// Get the directory name
    const { name, email, message } = request.validatedData;

    // Compile the Pug email template
    const emailTemplatePath = join(__dirname, '../views/emails/email-template.pug');
    const compiledPug = pug.compileFile(emailTemplatePath);
    const html = compiledPug({
        title: getProjectName(),
        name, email, message,
    });

    // Create email data
    const emailData = {
        from: email,
        to: process.env.MAILER_EMAIL,
        subject: 'New Contact Form Submission',
        html,
    };

    // Send the email
    await transporter.sendMail(emailData);
    logger.info('Email sent successfully');

    // Redirect to another page showing success or thank you message
    response.redirect('/api/contact-us');
};
