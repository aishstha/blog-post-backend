import { Request, Response, NextFunction } from 'express';

import config from '../config/config';
import LoginPayload from '../domain/requests/LoginPayload';
import BadRequestError from '../exceptions/BadRequestError';

import * as utilService from '../utils/jwt';
import * as HttpStatus from 'http-status-codes';
import * as authService from '../services/authService';
import * as userService from '../services/userService';

/**
 * Controller to handle /login request.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.body.token) {
      throw new BadRequestError(config.ERROR_MESSAGE.TOKEN_REQUIRED);
    }

    const loginPayload = req.body as LoginPayload; // todo loginorsignup change name
    const payload = await authService.verifyGoogleAccount(loginPayload.token);
    let user = await userService.findByGoogleId(payload.userId);

    if (!user.length) {
      const newUser = {
        name: payload.name,
        email: payload.email,
        userId: payload.userId,
        image: payload.imageUrl
      };

      user = await userService.create(newUser);
      user = [user]
    }

    const tokenData = { id: user[0]._id };

    const accessToken = utilService.generateAccessToken(tokenData);
    const refreshToken = utilService.generateRefreshToken(tokenData);

    const response = {
      accessToken,
      refreshToken,
      name: user[0].name,
      email: user[0].email,
      image: user[0].image,
      id: user[0]._id
    };

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: response,
      message: 'created'
    });
  } catch (err) {
    console.log('TODO: No user found', err);

    next(err);
  }
}

/**
 * Controller to handle /refresh request.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function getAccesstoken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const tokenData = { id: res.locals.loggedInPayload.id };

    const accessToken = utilService.generateAccessToken(tokenData);

    res.status(HttpStatus.OK).json({
      accessToken,
      code: HttpStatus.OK,
      message: 'genereated'
    });
  } catch (error) {
    next(error);
  }
}

/**
 * Controller to handle /logout request.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function logout(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.body.refreshToken;
    const user = await userService.findUserDetail(
      res.locals.loggedInPayload.id
    );
    if (user) {
      await userService.removeSession(user, token);
    }
    const response = [];

    res.status(HttpStatus.OK).json({
      response,
      code: HttpStatus.OK,
      message: 'genereated'
    });
  } catch (error) {
    next(error);
  }
}

