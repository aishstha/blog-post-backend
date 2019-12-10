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
  refreshToken: string[];
}

export default UserPayload;
