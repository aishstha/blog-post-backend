import User from "../models/userModel";

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
 * Fetch users by id from users table.
 *
 * @returns {Promise<User[]>}
 */
export async function fetchById(id: number): Promise<any> {
  let users = await User.fetchById(id);

  return users;
}

export async function fetchaById() {}
