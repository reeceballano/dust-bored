const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string()
            .min(3)
            .required(),
    
    username: Joi.string()
                .min(3)
                .required(),

    password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
                .required(),
    
    email: Joi.string()
            .email()
            .required(),
})

const findUserSchema = Joi.object({
    _id: Joi.string().min(10).required()
})

module.exports = {
    userSchema,
    findUserSchema
}