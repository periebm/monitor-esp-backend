import prisma from "../database/database";
import { Prisma } from "@prisma/client";

async function create(data: Prisma.UserUncheckedCreateInput) {
    return prisma.user.create({
      data,
    });
}

export const userRepository = {
    create
}