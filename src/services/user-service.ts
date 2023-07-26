import { CreateUserParams, LoginUserParams, User } from "../protocols";
import bcrypt from "bcrypt";
import { userRepository } from "../repositories/user-repository";
import { duplicatedEmailError } from "../errors/duplicatedemail-error";
import { UnauthorizedError } from "../errors/unauthorized-error";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { sessionRepository } from "../repositories/session-repository";

dotenv.config();

async function createUser({ email, username, password }: CreateUserParams): Promise<User> {

    await validateUniqueEmail(email);
    const hashedPassword = await bcrypt.hash(password, 10);

    return userRepository.create({ email, username, password: hashedPassword })
}

async function validateUniqueEmail(email: string) {
    const userEmail = await userRepository.findByEmail(email)
    if (userEmail) throw duplicatedEmailError();
}

async function loginUser({ email, password }: LoginUserParams) {
    const user = await userRepository.findByEmail(email);
    if (!user) throw UnauthorizedError();
    const id = user.id;

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw UnauthorizedError();

    const token = jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: 86400} ); //expires in 24hrs
    await sessionRepository.create({ userId: id, token })  

    return {
        user: {
            id: user.id,
            email: user.email,
            username: user.username
        },
        token
    };
}


export const userService = {
    createUser,
    loginUser
}