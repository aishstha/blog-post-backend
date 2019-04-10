import * as CommentDao from "../daos/comment";
import CommentPayload from "../domain/requests/CommentPayload";

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

// export function fetchAll(searchKey: string){
//   return new Promise((resolve, reject) => {
//     const option = {}
//     if (searchKey) {
//       option.name = searchKey;
//     }

//     CommentDao.find(option)
//     .then((user: any) => resolve(user))
//     .catch((err: any) => reject(err));
//   });
// }

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
  subCommentId: any
): Promise<CommentPayload[]> {
  const newComment: any = await CommentDao.updateSubComment(
    subComment,
    commentId,
    subCommentId
  );

  return newComment;
}

export async function deleteById(id: string): Promise<CommentPayload[]> {
  const posts: any = await CommentDao.deleteById(id);

  return posts;
}
