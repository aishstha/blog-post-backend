import User from '../models/userModel';
import UserPayload from '../domain/requests/UserPayload';

export function create(user: UserPayload) {
  return new Promise((resolve, reject) => {
    const UserModel = new User(user);
    UserModel.save()
      .then((userData: any) => resolve(userData))
      .catch((err: any) => reject(err));
  });
}

export function fetchAll(searchKey: string) {
  return new Promise((resolve, reject) => {
    const option: any = {};
    if (searchKey) {
      option.name = searchKey;
    }

    User.find(option)
      .then((userData: any) => resolve(userData))
      .catch((err: any) => reject(err));
  });
}

export function update(id: any, user: object) {
  return new Promise((resolve, reject) => {
    User.findOneAndUpdate({ _id: id }, user)
      .then((userData: any) => resolve(userData))
      .catch((err: any) => reject(err));
  });
}

export function getById(id: any) {
  return new Promise((resolve, reject) => {
    User.findById(id)
      .select('name email image')
      .then((user: any) => resolve(user))
      .catch((err: any) => reject(err));
  });
}

export function findByGoogleId(id: any) {
  return new Promise((resolve, reject) => {
    User.find({ userId: id })
      .then((user: any) => resolve(user))
      .catch((err: any) => reject(err));
  });
}

export function updateRefreshToken(user: UserPayload[], refreshToken: string) {
  return new Promise((resolve, reject) => {
    user[0].refreshToken.push(refreshToken);
    User.findOneAndUpdate({ _id: user[0]._id }, user[0])
      .then((userData: any) => resolve(userData))
      .catch((err: any) => reject(err));
  });
}

export function findUserDetail(id: any) {
  return new Promise((resolve, reject) => {
    User.findById(id)
      .then((userData: any) => resolve(userData))
      .catch((err: any) => reject(err));
  });
}
