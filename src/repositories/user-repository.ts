import prisma from "../database/database";
import { Prisma } from "@prisma/client";

async function create(data: Prisma.UserUncheckedCreateInput) {
    return prisma.user.create({
      data,
    });
}

async function findByEmail(email: string){
  return prisma.user.findUnique({
    where: { email }
  })
}

export const userRepository = {
    create, findByEmail
}