import Post from '../models/postModel';
import PostPayload from '../domain/requests/PostPayload';

export function create(post: PostPayload) {
  return new Promise((resolve, reject) => {
    const PostModel = new Post(post);
    PostModel.save()
      .then((postData: any) => resolve(postData))
      .catch((err: any) => reject(err));
  });
}

export function getById(id: any) {
  return new Promise((resolve, reject) => {
    Post.findById(id)
      .populate('users', 'name')
      .then((userData: any) => resolve(userData))
      .catch((err: any) => reject(err));
  });
}

export function fetchAll(searchKey: string) {
  return new Promise((resolve, reject) => {
    const searchOption: any = {};
    if (searchKey) {
      searchOption.title = new RegExp(searchKey, 'i');
    }

    Post.find(searchOption)
      .populate('users', 'name')
      .then((userData: any) => resolve(userData))
      .catch((err: any) => reject(err));
  });
}

export function deleteById(id: string) {
  return new Promise((resolve, reject) => {
    Post.deleteOne({ _id: id })
      .then((userData: any) => resolve(userData))
      .catch((err: any) => reject(err));
  });
}

export function updateById(id: any, data: object) {
  return new Promise((resolve, reject) => {
    Post.findOneAndUpdate({ _id: id }, data, { new: true })
      .then((userData: any) => resolve(userData))
      .catch((err: any) => reject(err));
  });
}
