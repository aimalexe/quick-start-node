import Joi from 'joi';

import { name, email } from './reuseable-validators.js';

export function contactUs(data) {
    const validContactUsForm = Joi.object({
        name,
        email,
        message: Joi
            .string()
            .min(10)
            .max(600)
            .required(),
    });

    return validContactUsForm.validate(data);
}