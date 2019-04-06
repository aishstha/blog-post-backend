// import logger from '../utils/logger';
// import * as bcrypt from '../utils/bcrypt';
// import transform from '../utils/transform';
// import Role from '../resources/enums/Role';
import User from "../models/userModel";
// import * as userDao from '../daos/user';
// import UserDetail from '../domain/entities/UserDetail';
// import UserPayload from '../domain/requests/UserPayload';

/**
 * Fetch all users from users table.
 *
 * @returns {Promise<User[]>}
 */
export async function fetchAll() {
  let users = await User.fetchAll();

  return users;
}

/**
 * Fetch all users from users table.
 *
 * @returns {Promise<User[]>}
 */
export async function fetchById(id: number):Promise<any> {
  let users = await User.fetchById(id);

  return users;
}

export async function fetchaById() {}
