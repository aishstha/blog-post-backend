import Post from '../models/postModel';
import PostPayload from '../domain/requests/PostPayload';

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
      .populate('users', 'name')
      .then((user: any) => resolve(user))
      .catch((err: any) => reject(err));
  });
}

export function fetchAll(searchKey: string) {
  return new Promise((resolve, reject) => {
    const option = {};
    if (searchKey) {
      option.title = searchKey;
    }

    Post.find(option)
      .populate('users', 'name')
      .then((user: any) => resolve(user))
      .catch((err: any) => reject(err));
  });
}

export function deleteById(id: string) {
  return new Promise((resolve, reject) => {
    Post.deleteOne({ id })
      .then((user: any) => resolve(user))
      .catch((err: any) => reject(err));
  });
}
