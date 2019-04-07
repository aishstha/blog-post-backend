import * as UserDao from '../daos/user';
import UserPayload from '../domain/requests/UserPayload';

/**
 * Fetch all users from users table.
 *
 * @returns {Promise<UserPayload[]>}
 */
export async function fetchAll(searchKey: string): Promise<UserPayload[]> {
  const users: any = await UserDao.fetchAll(searchKey);

  return users;
}

/**
 *  Create new user in users table.
 *
 * @param user Object
 *
 * @returns {Promise<UserPayload[]>}
 */
export async function create(user: UserPayload): Promise<UserPayload[]> {
  const users: any = await UserDao.create(user);

  return users;
}

/**
 *  Update user by id in users table.
 *
 * @param id String
 * @param user Object
 *
 * @returns {Promise<UserPayload[]>}
 */
export async function update(
  id: string,
  user: UserPayload
): Promise<UserPayload[]> {
  const updateUser: any = await UserDao.update(id, user);

  return updateUser;
}

/**
 *  Ferch all users by id from users table.
 *
 * @param id String
 *
 * @returns {Promise<UserPayload[]>}
 */
export async function getById(id: string): Promise<UserPayload[]> {
  const updateUser: any = await UserDao.getById(id);

  return updateUser;
}
