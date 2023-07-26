import prisma from "../database/database";
import { Prisma } from "@prisma/client";

async function create(data: Prisma.SessionUncheckedCreateInput){
  return prisma.session.create({
    data
  })
}

export const sessionRepository = {
  create
}