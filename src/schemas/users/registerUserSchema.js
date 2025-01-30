import joi from 'joi';

import { joiErrorMessages } from '../joiErrorMessages.js';

export const registerUserSchema = joi.object({
	username: joi.string().min(3).max(50).required().messages(joiErrorMessages),
	email: joi
		.string()
		.email({ tlds: { allow: false } })
		.required()
		.messages(joiErrorMessages),
	password: joi
		.string()
		.pattern(
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@¡!$%^&*()_+|~=`{}:";'<>¿?,.])[a-zA-Z0-9@¡!$%^&*()_+|~=`{}:";'<>¿?,.]{8,}$/
		)
		.required()
		.messages(joiErrorMessages),
});
