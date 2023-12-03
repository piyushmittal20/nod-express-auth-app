import Joi from 'joi';

export const createAccountDto = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
})

export const loginDto = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
})