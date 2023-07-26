import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import * as jwt from 'jsonwebtoken';
import { AuthenticatedRequest, JWTPayload } from '../protocols';
import { UnauthorizedError } from '../errors/unauthorized-error';
import { sessionRepository } from '../repositories/session-repository';
import { userRepository } from '../repositories/user-repository';

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const authHeader = req.header('Authorization');
    if (!authHeader) return UnauthorizedError();

    const token = authHeader.split(' ')[1];
    if (!token) return UnauthorizedError();
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET) as { id: number }; // ou a interface correta que representa o conteúdo do JWT

        const user = await userRepository.findById(decoded.id)
        if(!user || !user.id) return UnauthorizedError();

        const session = await sessionRepository.findSession(token);
        if (!session) return UnauthorizedError();

        req.userId = decoded.id;

        return next();
    }
    catch (err) {
        return res.status(httpStatus.UNAUTHORIZED).send(err.message)
    }
}