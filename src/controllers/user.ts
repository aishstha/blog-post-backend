import * as HttpStatus from "http-status-codes";
import { Request, Response, NextFunction } from "express";

import config from "../config/config";
import * as userService from "../services/userService";

const { messages } = config;

/**
 * Controller to handle /users GET request.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await userService.fetchAll();

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: response,
      message: messages.users.fetchAll
    });
  } catch (err) {
    next(err);
  }
}

/**
 * Controller to handle /users GET request.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function fetchById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id: number = Number(req.params.id);
    const response: any = await userService.fetchById(id);

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: response,
      message: messages.users.fetchById
    });
  } catch (err) {
    next(err);
  }
}

// /**
//  * Controller to handle /users POST request.
//  *
//  * @param {Request} req
//  * @param {Response} res
//  * @param {NextFunction} next
//  */
// export async function store(req: Request, res: Response, next: NextFunction) {
//   try {
//     const userPayload = req.body as UserPayload;

//     const response = await userService.insert(userPayload);

//     res.status(HttpStatus.OK).json({
//       code: HttpStatus.OK,
//       data: response,
//       message: messages.users.insert
//     });
//   } catch (err) {
//     next(err);
//   }
// }
