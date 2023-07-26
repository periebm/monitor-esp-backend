
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { userService } from '../services/user-service';
import { notFoundError } from '../errors/not-found-error';


export async function createUser(req: Request, res: Response) {
    const {email, username, password} = req.body;
    throw notFoundError();
    
    const user = await userService.createUser({email, username, password}) 
    res.send(user)
}