import { Router } from "express";
import { getData } from "../controllers/esp-controller";

const espRouter = Router();

espRouter.get("/randomNumber", getData);

export default espRouter;