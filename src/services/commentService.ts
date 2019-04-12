import config from '../config/config';
import UnauthorizedError from '../exceptions/UnauthorizedError';
import CommentPayload from '../domain/requests/CommentPayload';
import PostPayload from '../domain/requests/PostPayload';

import * as CommentDao from '../daos/comment';

export async function create(
  comment: CommentPayload,
  postId: any,
  userId: any
): Promise<CommentPayload[]> {
  const newComment: any = await CommentDao.create(comment, postId, userId);

  return newComment;
}

export async function findByPostId(postId: any): Promise<CommentPayload[]> {
  const newComment: any = await CommentDao.findByPostId(postId);

  return newComment;
}

export async function createSubComment(
  subComment: CommentPayload,
  commentId: any,
  userId: any
): Promise<CommentPayload[]> {
  const newComment: any = await CommentDao.createSubComment(
    subComment,
    commentId,
    userId
  );

  return newComment;
}

export async function updateSubComment(
  subComment: CommentPayload,
  commentId: any,
  subCommentId: any,
  currentUserId: any
): Promise<CommentPayload[]> {
  const newComment: any = await CommentDao.updateSubComment(
    subComment,
    commentId,
    subCommentId,
    currentUserId
  );

  return newComment;
}

export async function update(
  id: string,
  comment: CommentPayload,
  currentUserId: any
): Promise<CommentPayload[]> {
  const fetchComment: any = await CommentDao.getById(id);

  if (currentUserId !== fetchComment.users.toString()) {
    throw new UnauthorizedError(config.ERROR_MESSAGE.INVALID_ACTION);
  }

  console.log('eta ayo');
  const updateComment: any = await CommentDao.update(id, {
    description: comment.description
  });

  return updateComment;
}

export async function removeSubComment(
  commentId: any,
  userId: any
): Promise<CommentPayload[]> {
  const newComment: any = await CommentDao.removeSubComment(commentId, userId);

  return newComment;
}

export async function deleteById(id: string): Promise<PostPayload[]> {
  const posts: any = await CommentDao.deleteById(id);

  return posts;
}
