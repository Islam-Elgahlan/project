const Joi = require('joi');

module.exports = {
    addNewUserSchema : {
        body :Joi.object().required().keys({
            name:Joi.string().required(),
            email:Joi.string().required().email(),
            password:Joi.string().required(),
            age:Joi.number().required(),
        }),
    },
}