import Joi from "joi";

import {validator} from "../../utils/helpers"

//.pattern(/^[A-Za-z0-9]{5, 10}$/)
export const createUserValidator = (payload: {[key: string]: any}) => {
    return validator( Joi.object({
        username: Joi.string().trim().required(),
        email: Joi.string().trim().required(),
        password: Joi.string().required(),
        phoneNo: Joi.string().trim().required()
        // address: Joi.object({
        //     country: Joi.string().trim().required(),
        //     state: Joi.string().trim().required(),
        //     localGovt: Joi.string().trim().required(),
        //     postalcode: Joi.string().length(6).required()
        // })
        // followers: Joi.array().items(Joi.string()),
        // followings: Joi.array().items(Joi.string())
    })
    , payload )
}

export const verificationCodeValidator = (payload: {[key: string]: any}) => {
    return validator( Joi.object({
        verificationCode: Joi.string().length(6).required()
    })
    , payload )
}

export const loginUserValidator = (payload: {[key: string]: any}) => {
    return validator( Joi.object({
        
        email: Joi.string().trim().required(),
        password: Joi.string().required() //alphanumeric password, min 5 & max 10
    })
    , payload )
}

export const forgotPasswordMailValidator = (payload: {[key: string]: any}) => {
    return validator( Joi.object({
        email: Joi.string().trim().required()
    }),
    payload)
}

export const resetPasswordValidator = (payload: {[key: string]: any}) => {
    return validator( Joi.object({
        newPassword: Joi.string().required(),
        confirm_password: Joi.ref("newPassword")
    }),
    payload)

} 

export const changePasswordValidator = (payload: {[key: string]: any}) => {
    return validator( Joi.object({
        old_password: Joi.string().required(),
        newPassword: Joi.string().required(),
        confirm_password: Joi.ref("newPassword")
    }),
    payload)
} 
