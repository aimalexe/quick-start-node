import express from 'express';

import { pagesController } from '../controllers/index.js';
import { asyncHandler, validateAndSanitize } from '../middlewares/index.js';
import { contactUs } from '../validators/index.js';

const router = express.Router();
const {
    getHomePage, getAboutUsPage, getContactUsPage,
    postContactUsEmailForm,
} = pagesController;

router.get('/', asyncHandler(getHomePage));

router.get('/about-us', asyncHandler(getAboutUsPage));

router.get('/contact-us', asyncHandler(getContactUsPage));
router.post(
    '/contact-us',
    validateAndSanitize(contactUs),
    asyncHandler(postContactUsEmailForm),
);


export default router;