import * as utilService from '../utils/jwt';
import * as HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import * as authService from '../services/authService';
import * as userService from '../services/userService';
import LoginPayload from '../domain/requests/LoginPayload';

/**
 * Controller to handle /posts POST request.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const loginPayload = req.body as LoginPayload;

    const payload = await authService.verifyGoogleAccount(loginPayload.token);
    const user = await userService.findByGoogleId(payload.userId)

    if (!user.length) {
      throw new Error('No user found');
    }

    const tokenData = {id: user[0]._id};

    const accessToken = utilService.generateAccessToken(tokenData);
    const refreshToken = utilService.generateRefreshToken(tokenData);

    const response = {
      accessToken,
      refreshToken,
      name: user[0].name,
      email: user[0].email,
      image: user[0].image,
    }
    

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: response,
      message: 'created'
    });
  } catch (err) {
    next(err);
  }
}
