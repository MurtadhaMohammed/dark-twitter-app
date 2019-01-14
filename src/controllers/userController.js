let User = require('../models/user');
const Joi = require('joi');

class UserController {
    constructor() {
        this.user = new User;
    }
    login(email, password, callback) {
        this.user.checkUser(email, password, (user, error) => {
            if (user) {
                callback(undefined, user)
            } else {
                callback(error.message, undefined)
            }
        })
    }

    register(user) {
        const userSchema = Joi.object().keys({
            name: Joi.string().required().min(3),
            email: Joi.string().required(),
            password: Joi.string().required(),
            gender: Joi.string().required(),
        });

        Joi.validate({
            name: user.name,
            email: user.email,
            password: user.password,
            gender: user.gender
        }, userSchema, (error, user) => {
            if (error) {
                console.error(error.message)
            } else {
                this.user.createUser(user, (success, error) => {
                    if (error) {
                        console.log(error)
                    } else {
                        console.info("Register Successfully")
                    }
                })
            }
        });

    }

    

    searchByname(name) {
        this.user.find(name, (success, error) => {
            if (error) {
                console.log(error)
            } else {
                console.info(success)
            }
        });
    }
}

module.exports = UserController

