import PostPayload from '../domain/requests/PostPayload';

import { IPostPayload } from './../interface/post';

import * as PostDao from '../daos/post';

export async function create(
  userId: any,
  post: PostPayload
): Promise<PostPayload[]> {
  post.users = {
    _id: userId
  };
  const posts: any = await PostDao.create(post);
  // const posts: any = await PostDao.fetchAll(option);

  return posts;
}

export async function getById(id: string): Promise<any[]> {
  const updateUser: any = await PostDao.getById(id);

  return updateUser;
}

/**
 * Fetch all users from users table.
 *
 * @returns {Promise<UserPayload[]>}
 */
export async function fetchAll(searchKey: string): Promise<PostPayload[]> {
  const users: any = await PostDao.fetchAll(searchKey);

  return users;
}

export async function deleteById(id: string): Promise<PostPayload[]> {
  const posts: any = await PostDao.deleteById(id);

  return posts;
}

/**
 *  Update post by id.
 *
 * @param id String
 * @param post Object
 *
 * @returns {Promise<IPostPayload[]>}
 */
export async function updateById(
  id: string,
  post: IPostPayload
): Promise<IPostPayload[]> {
  const updateUser: any = await PostDao.updateById(id, post);

  return updateUser;
}
