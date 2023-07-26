
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { userService } from '../services/user-service';
import { notFoundError } from '../errors/not-found-error';
import { LoginUserParams } from '../protocols';


export async function createUser(req: Request, res: Response) {
    const {email, username, password} = req.body;
    
    const user = await userService.createUser({email, username, password}) 
    return res.status(httpStatus.CREATED).json({
        id: user.id, 
        email:user.email, 
        username: user.username
    })
}

export async function loginUser(req: Request, res: Response){
    const {email, password} = req.body as LoginUserParams;

    const result = await userService.loginUser({email, password});
    return res.status(httpStatus.OK).send(result);

    //TODO make session expire after X amount of time
}