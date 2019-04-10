import * as HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

// import config from '../config/config';
import * as postService from '../services/postService';
import * as commentService from '../services/commentService';
import PostPayload from '../domain/requests/PostPayload';
import { IPostPayload } from './../interface/post';

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

    // const response = await postService.create(postPayload);
    const response = await postService.create(res.locals.loggedInPayload.id, postPayload);


    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: response,
      message: 'created'
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
    // const post = await postService.getById(req.params.id);
    // const comments = await commentService.findByPostId(req.params.id);
    const post = await postService.getById(req.params.id);
    const comments = await commentService.findByPostId(req.params.id);


    const response = {
      comments,
      id: post._id,
      users: post.users,
      title: post.title,
      description: post.description
    };

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: response,
      message: 'data'
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
    const searchKey = req.query.searchKey || '';
    const response = await postService.fetchAll(searchKey);

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: response,
      message: 'All post'
    });
  } catch (err) {
    next(err);
  }
}

/**
 * Controller to handle /posts/:id DELETE request.
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
      message: 'Deleted'
    });
  } catch (err) {
    next(err);
  }
}

/**
 * Controller to handle /posts/:id PUT request.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function updatePostById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const postPayload = req.body as IPostPayload;

    const response = await postService.updateById(req.params.id, postPayload);

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: response,
      message: 'Updated'
    });
  } catch (err) {
    next(err);
  }
}
