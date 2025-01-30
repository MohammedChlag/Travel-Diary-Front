import joi from 'joi';
import { joiErrorMessages } from '../joiErrorMessages.js';

export const newTravelSchema = joi
	.object({
		title: joi.string().min(5).max(50).required().messages(joiErrorMessages),
		place: joi.string().min(5).max(30).required().messages(joiErrorMessages),
		description: joi
			.string()
			.min(5)
			.max(500)
			.required()
			.messages(joiErrorMessages),
		img1: joi.object().messages(joiErrorMessages),
		img2: joi.object().messages(joiErrorMessages),
		img3: joi.object().messages(joiErrorMessages),
	})
	.unknown(true);
