import Post from "../models/postModel";
import PostPayload from "../domain/requests/PostPayload";

export function create(post: PostPayload) {
  return new Promise((resolve, reject) => {
    const PostModel = new Post(post);
    PostModel.save()
      .then((post: any) => resolve(post))
      .catch((err: any) => reject(err));
  });
}

export function getById(id: any) {
  return new Promise((resolve, reject) => {
    Post.findById(id)
      .populate("users", "name")
      .then((user: any) => resolve(user))
      .catch((err: any) => reject(err));
  });
}

export function fetchAll(searchKey: string) {
  return new Promise((resolve, reject) => {
    let searchOption = {};
    if (searchKey) {
      searchOption.title = new RegExp(searchKey, 'i')
    }

    Post.find(searchOption)
      .populate("users", "name")
      .then((user: any) => resolve(user))
      .catch((err: any) => reject(err));
  });
}

export function deleteById(id: string) {
  return new Promise((resolve, reject) => {
    Post.deleteOne({ _id: id })
      .then((user: any) => resolve(user))
      .catch((err: any) => reject(err));
  });
}

export function updateById(id: any, data: object) {
  return new Promise((resolve, reject) => {
    Post.findOneAndUpdate({ _id: id }, data, { new: true })
      .then((user: any) => resolve(user))
      .catch((err: any) => reject(err));
  });
}
