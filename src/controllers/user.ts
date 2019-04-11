import * as HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import config from '../config/config';
import * as userService from '../services/userService';
import * as authService from '../services/authService';
import UserPayload from '../domain/requests/UserPayload';
import LoginPayload from '../domain/requests/LoginPayload';

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
    const searchKey = req.query.searchKey || '';
    const response = await userService.fetchAll(searchKey);

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
 * Controller to handle /users POST request.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const userPayload = req.body as LoginPayload;
    const payload = await authService.verifyGoogleAccount(userPayload.token);
    const user = await userService.findByGoogleId(payload.userId)

    if (user.length) {
      throw new Error('User already existed')
    }

    const newUser = {
      name: payload.name,
      email: payload.email,
      userId: payload.userId,
      image: payload.imageUrl
    }

    const response = await userService.create(newUser);
    console.log('created user ', response)

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: response,
      message: messages.users.insert
    });
  } catch (err) {
    console.log('TODO: No user found', err);

    next(err);
  }
}

/**
 * Controller to handle /users POST request.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const userPayload = req.body as UserPayload;

    const response = await userService.update(res.locals.loggedInPayload.id, userPayload);

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: response,
      message: messages.users.insert
    });
  } catch (err) {
    next(err);
  }
}

/**
 * Controller to handle /users POST request.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await userService.getById(req.params.id);

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: response,
      message: messages.users.insert
    });
  } catch (err) {
    next(err);
  }
}

/**
 * Controller to handle /users POST request.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function getUserDetail(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await userService.getById(res.locals.loggedInPayload.id);

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: response,
      message: messages.users.insert
    });
  } catch (err) {
    next(err);
  }
}
  
