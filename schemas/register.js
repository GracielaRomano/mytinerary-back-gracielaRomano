import joi from "joi";

let registerSchema = joi.object({
    name: joi.string().trim().pattern(/^[A-Za-z]+$/).required().min(3).max(20).messages({
        "string.base": "name must be a string",
        'string.min': "name name must have at least 3 characters please!",
        'string.max': "name must have a maximum of 20 characters please!",
        'any.required': "name is required",
        "string.empty": "name is required",
        "string.pattern.base": "name must not contain numbers"
    }),
    lastName:joi.string().trim().pattern(/^[A-Za-z]+$/).min(3).max(20).empty("").messages({
        "string.base": "last name must be a string",
        'string.min':"last name must have at least 3 characters please!",
        'string.max':"last name must have a maximum of 20 characters please!",
        "string.pattern.base": "last must not contain numbers"
    }),
    mail: joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().messages({
        "string.base": "email must be a string",
        "string.email": "email is invalid",
        'any.required': "email is required",
        "string.empty": "email is required",

    }),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,16}$')).required().min(8).max(16).messages({
        "string.base": "password must be a string",
        'string.min': "password must be 8 characters please!",
        
        "string.pattern.base": "password must contain 8 to 16 characters,letters, numbers and capital letters",
        'any.required': "password is required",
        "string.empty": "password is required",
    }),
    country: joi.string().required().min(2).max(20).messages({
        "string.base": "country must be a string",
        'string.min': "country must have at least 2 characters please!",
        'string.max': "country must have a maximum of 20 characters please!",
        'any.required': "country is required",
        "string.empty": "country is required",
    }),
    photo: joi.string().empty('').default('https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg')
        
        .messages({
    }),
})
export default registerSchema