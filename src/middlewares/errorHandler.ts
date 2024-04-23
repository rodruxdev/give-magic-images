import { Boom } from "@hapi/boom";
import { NextFunction, Request, Response } from "express";

export function logErrors(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("New error:");
  console.log(err);
  next(err);
}

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("errorHandler");
  res.status(500).json({
    message: err?.message,
    stack: err?.stack,
  });
}

export function boomHandler(
  err: Boom,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}
