import * as HttpStatus from "http-status-codes";
import { Request, Response, NextFunction } from "express";

// import config from '../config/config';
import * as postService from "../services/postService";
import * as commentService from "../services/commentService";
import PostPayload from "../domain/requests/PostPayload";

/**
 * Controller to handle /posts POST request.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const postPayload = req.body as PostPayload;

    const response = await postService.create(postPayload);

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
 * Controller to handle /post POST request.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    let post = await postService.getById(req.params.id);
    let comments = await commentService.findByPostId(req.params.id);

    let response = {
      id: post._id,
      title: post.title,
      description: post.description,
      user: post.users,
      comments: comments
    };

    console.log("the comment are ", comments);

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: response,
      message: "data"
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
export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const searchKey = req.query.searchKey || "";
    const response = await postService.fetchAll(searchKey);

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: response,
      message: "All post"
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
export async function deletePostById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await postService.deleteById(req.params.id);

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: response,
      message: "Deleted"
    });
  } catch (err) {
    next(err);
  }
}
