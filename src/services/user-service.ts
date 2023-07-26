import { CreateUserParams, User } from "../protocols";
import bcrypt from "bcrypt";
import { userRepository } from "../repositories/user-repository";
import { invalidDataError } from "../errors/invalid-data-error";
import { notFoundError } from "../errors/not-found-error";

async function createUser({email, username, password}: CreateUserParams): Promise<User> {

    //await validateUniqueEmail(email);
    const hashedPassword = await bcrypt.hash(password, 10);

    return userRepository.create({email, username, password})
}

export const userService = {
    createUser
}