import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Posts = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  }
});

export default mongoose.model('posts', Posts);
