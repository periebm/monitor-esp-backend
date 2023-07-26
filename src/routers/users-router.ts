import { Router } from "express";
import { validateBody } from "../middlewares/validation-middleware";
import { createUserSchema } from "../schemas/users-schemas";
import { createUser } from "../controllers/users-controllers";

const usersRouter = Router();

usersRouter.post("/sign-up", validateBody(createUserSchema), createUser);

export {usersRouter}