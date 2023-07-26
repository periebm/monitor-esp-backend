import Joi from "joi";
import { CreateUserParams, LoginUserParams } from "../protocols";

export const createUserSchema = Joi.object<CreateUserParams>({
    email: Joi.string().email().required(),
    username: Joi.string().min(3).required(),
    password: Joi.string().min(6).required(),
})

export const loginSchema = Joi.object<LoginUserParams>({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
})