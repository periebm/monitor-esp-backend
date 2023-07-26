import prisma from "../database/database";
import { Prisma } from "@prisma/client";

async function create(data: Prisma.SessionUncheckedCreateInput){
  return prisma.session.create({
    data
  })
}

async function findSession(token: string){
  return prisma.session.findFirst({
    where:{
      token
    }
  })
}

export const sessionRepository = {
  create,
  findSession
}