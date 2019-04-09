import * as PostDao from '../daos/post';
import PostPayload from '../domain/requests/PostPayload';

const option = '';
export async function create(post: PostPayload): Promise<PostPayload[]> {
  await PostDao.create(post);
  const posts: any = await PostDao.fetchAll(option);

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


// TODO: Not working
export async function deleteById(id: string): Promise<PostPayload[]> {
  const posts: any = await PostDao.deleteById(id);

  return posts;
}
