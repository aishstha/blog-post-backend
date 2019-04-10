import * as utilService from "../utils/jwt";
import * as HttpStatus from "http-status-codes";
import { Request, Response, NextFunction } from "express";
import * as authService from "../services/authService";
import * as userService from "../services/userService";
import LoginPayload from "../domain/requests/LoginPayload";

/**
 * Controller to handle /posts POST request.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const loginPayload = req.body as LoginPayload; //todo loginorsignup change name
    const payload = await authService.verifyGoogleAccount(loginPayload.token);
    let user = await userService.findByGoogleId(payload.userId);
    console.log("payload", payload);

    if (!user.length) {
      const newUser = {
        name: payload.name,
        email: payload.email,
        userId: payload.userId,
        image: payload.imageUrl
      };

      user = await userService.create(newUser);
    }
    console.log(">>>>>>>>>>>>>>>>>>>>>", user);

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
      message: "created"
    });
  } catch (err) {
    console.log("TODO: No user found", err);

    next(err);
  }
}
