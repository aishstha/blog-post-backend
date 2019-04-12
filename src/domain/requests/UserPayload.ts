/**
 *  UserPayload Interface.
 */
interface UserPayload {
  _id: string;
  name: string;
  email: string;
  userId: string;
  image: string;
  accessToken: string;
  refreshToken: Array<string>;
}

export default UserPayload;
