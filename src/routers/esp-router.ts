import { Router } from "express";
import { getData } from "../controllers/esp-controller";
import { authenticateToken } from "../middlewares/authentication-middleware";

const espRouter = Router();

espRouter.get("/randomNumber",authenticateToken, getData);

export default espRouter;