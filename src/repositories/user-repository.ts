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

async function findById(id: number){
  return prisma.user.findUnique({
    where: { id }
  })
}

export const userRepository = {
    create, findByEmail, findById
}