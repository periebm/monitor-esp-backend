import { Router } from "express";
import { validateBody } from "../middlewares/validation-middleware";
import { createUserSchema, loginSchema } from "../schemas/users-schemas";
import { createUser, loginUser } from "../controllers/users-controllers";

const usersRouter = Router();

usersRouter.post("/sign-up", validateBody(createUserSchema), createUser);
usersRouter.post("/login", validateBody(loginSchema), loginUser);


export {usersRouter}