import Comment from '../models/commentModel';
import CommentPayload from '../domain/requests/CommentPayload';
import config from '../config/config';
import UnauthorizedError from '../exceptions/UnauthorizedError';

export function create(comment: CommentPayload, postId: any, userId: any) {
  return new Promise((resolve, reject) => {
    const buildComment = {
      description: comment.description || '',
      posts: {
        _id: postId
      },
      users: {
        _id: userId
      }
    };
    const CommentModel = new Comment(buildComment);
    CommentModel.save()
      .then((commentDetail: any) => resolve(commentDetail))
      .catch((err: any) => reject(err));
  });
}

export function findByPostId(postId: string) {
  return new Promise((resolve, reject) => {
    let option = {};
    if (!postId) {
      throw new Error('Please provide post id.');
    }
    option = {
      posts: postId
    };

    Comment.find(option)
      .populate('users', 'name')
      .populate({
        path: 'sub_comments.users',
        model: 'users',
        select: 'name'
      })
      .then((user: any) => resolve(user))
      .catch((err: any) => reject(err));
  });
}

export function createSubComment(subComment: CommentPayload, commentId: any, userId: any) {
  return new Promise((resolve, reject) => {
    const subCommentResult = {
      description: subComment.description || '',
      users: {
        _id: userId
      }
    };

    Comment.findOneAndUpdate({ _id: commentId }, { $push: { sub_comments: subCommentResult } })
      .then((commentDetail: any) => resolve(commentDetail))
      .catch((err: any) => reject(err));
  });
}

export function updateSubComment(subComment: CommentPayload, commentId: any, subCommentId: any, currentUserId: any) {
  return new Promise((resolve, reject) => {
    Comment.findById(commentId)
      .then((comment: any) => {
        const subDoc = comment.sub_comments.id(subCommentId);
        console.log('subDoc.users', subDoc.users);
        console.log('currentUserId', currentUserId);
        if (subDoc.users.toString() !== currentUserId) {
          throw new UnauthorizedError(config.ERROR_MESSAGE.INVALID_ACTION);
        }

        console.log(subDoc);
        subDoc.set({ description: subComment.description || '' });

        comment
          .save()
          .then(function(savedComment: any) {
            resolve(savedComment);
          })
          .catch(function(err: any) {
            reject(err);
          });
      })
      .catch((err: any) => reject(err));
  });
}

export function deleteById(id: string) {
  return new Promise((resolve, reject) => {
    Comment.deleteOne({ _id: id })
      .then((user: any) => resolve(user))
      .catch((err: any) => reject(err));
  });
}

export function update(id: any, comment: object) {
  return new Promise((resolve, reject) => {
    Comment.findOneAndUpdate({ _id: id }, comment)
      .then((commentData: any) => resolve(commentData))
      .catch((err: any) => reject(err));
  });
}

export function getById(id: any) {
  return new Promise((resolve, reject) => {
    Comment.findById(id)
      .then((user: any) => resolve(user))
      .catch((err: any) => reject(err));
  });
}

export function removeSubComment(commentId: any, subCommentId: any) {
  return new Promise((resolve, reject) => {
    Comment.findById(commentId)
      .then((comment: any) => {
        comment.sub_comments.id(subCommentId).remove();

        comment
          .save()
          .then(function(savedComment: any) {
            resolve(savedComment);
          })
          .catch(function(err: any) {
            reject(err);
          });
      })
      .catch((err: any) => reject(err));
  });
}
