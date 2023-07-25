import express, {json, Request, Response} from "express";
import dotenv from "dotenv";
import espRouter from "./routers/esp-router";
import { handleApplicationErrors } from "./middlewares/error-handler";

dotenv.config();

const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => res.send("ok!"));
app.use(espRouter)
app.use(handleApplicationErrors)

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server is up and running on port ${port}`);
})