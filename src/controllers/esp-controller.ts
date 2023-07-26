import { Request, Response } from "express";
import axios from "axios";
import { esp } from "../utils/helpers";
import httpStatus from "http-status";

export async function getData(req: Request, res: Response) {
    try {
        const result = await axios.get(`${esp.url}/random-number`);
        const resposta = String(result.data)
        res.send(resposta);
    } catch (error) {
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}