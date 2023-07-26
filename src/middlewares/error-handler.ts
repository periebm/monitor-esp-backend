import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ApplicationError } from "../protocols";

export default function errorHandler(err: ApplicationError | Error, req: Request, res: Response, next: NextFunction) {
  console.log(err.name)
  
  if (err.name === "ConflictError") {
    return res.status(httpStatus.CONFLICT).send({
      message: err.message,
    });
  }

  if (err.name === "UnauthorizedError") {
    return res.status(httpStatus.UNAUTHORIZED).send({
      message: err.message,
    });
  }

  if (err.name === "NotFoundError") {
    return res.status(httpStatus.NOT_FOUND).send({
      message: err.message,
    });
  }

  if (err.name === "BadRequest") {
    return res.status(httpStatus.BAD_REQUEST).send({
      message: err.message,
    });
  }

  res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    error: "InternalServerError",
    message: "Internal Server Error",
  });
}