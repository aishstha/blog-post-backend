import User from "../models/userModel";
import UserPayload from "../domain/requests/UserPayload";

export function create(user: UserPayload) {
  return new Promise((resolve, reject) => {
    const UserModel = new User(user);
    UserModel.save()
      .then((userInfo: any) => resolve(userInfo))
      .catch((err: any) => reject(err));
  });
}

export function fetchAll(searchKey: string) {
  return new Promise((resolve, reject) => {
    const option = {};
    if (searchKey) {
      option.name = searchKey;
    }

    User.find(option)
      .then((userInfo: any) => resolve(userInfo))
      .catch((err: any) => reject(err));
  });
}

export function update(id: any, user: object) {
  return new Promise((resolve, reject) => {
    User.findOneAndUpdate({ _id: id }, user, { upsert: true, new: true})
      .then((userInfo: any) => {
        resolve(userInfo)})
      .catch((err: any) => reject(err));
  });
}

export function getById(id: any) {
  return new Promise((resolve, reject) => {
    User.findById(id)
      .then((userInfo: any) => resolve(userInfo))
      .catch((err: any) => reject(err));
  });
}
