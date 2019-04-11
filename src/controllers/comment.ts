import * as HttpStatus from "http-status-codes";
import { Request, Response, NextFunction } from "express";

import CommentPayload from "../domain/requests/CommentPayload";

import * as commentService from "../services/commentService";
import BadRequestError from '../exceptions/BadRequestError';
import config from '../config/config';

/**
 * Controller to handle /comments POST request.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const commentPayload = req.body as CommentPayload;

    if (!req.params.postId) {
      throw new BadRequestError(config.ERROR_MESSAGE.TOKEN_REQUIRED);
    }

    const response = await commentService.create(
      commentPayload,
      req.params.postId,
      res.locals.loggedInPayload.id
    );

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: response,
      message: "created"
    });
  } catch (err) {
    next(err);
  }
}

/**
 * Controller to handle /comments PUT request.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function editSubComment(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const subCommentPayload = req.body as CommentPayload;

    const response = await commentService.updateSubComment(
      subCommentPayload,
      req.params.id,
      req.params.subCommentId,
      res.locals.loggedInPayload.id
    );

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: response,
      message: "created"
    });
  } catch (err) {
    next(err);
  }
}

/**
 * Controller to handle /comments POST request.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function createSubComment(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const subCommentPayload = req.body as CommentPayload;

    const response = await commentService.createSubComment(
      subCommentPayload,
      req.params.id,
      res.locals.loggedInPayload.id
    );

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: response,
      message: "created"
    });
  } catch (err) {
    next(err);
  }
}

/**
 * Controller to handle /comment/:id DELETE request.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function deleteById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log("req.param", req.params);
    const response = await commentService.deleteById(req.params.id);

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: response,
      message: "Deleted"
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
export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const commentPayload = req.body as CommentPayload;
    console.log("res.locals.loggedInPayload.id", res.locals.loggedInPayload);
    const response = await commentService.update(
      req.params.id,
      commentPayload,
      res.locals.loggedInPayload.id
    );

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: response,
      message: "abc"
    });
  } catch (err) {
    next(err);
  }
}

/**
 * Controller to handle /posts POST request.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function removeSubComment(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await commentService.removeSubComment(
      req.params.id,
      req.params.subCommentId
    );

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: response,
      message: "Deleted"
    });
  } catch (err) {
    next(err);
  }
}
