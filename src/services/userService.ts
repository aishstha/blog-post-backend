import UserPayload from "../domain/requests/UserPayload";

import * as UserDao from "../daos/user";

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

export async function findByGoogleId(id: string): Promise<UserPayload[]> {
  const updateUser: any = await UserDao.findByGoogleId(id);

  return updateUser;
}

export async function updateRefreshToken(
  user: string,
  refreshToken: string
): Promise<UserPayload[]> {
  const updateUser: any = await UserDao.updateRefreshToken(user, refreshToken);

  return updateUser;
}

export async function findUserDetail(id: string): Promise<UserPayload[]> {
  const updateUser: any = await UserDao.findUserDetail(id);

  return updateUser;
}

export async function removeSession(
  user: UserPayload,
  token: string
): Promise<UserPayload[]> {
  const index = user.refreshToken.indexOf(token);
  if (index > -1) {
    user.refreshToken = user.refreshToken.splice(index, 1);

    await UserDao.update(user._id, user);
  }

  return [];
}

