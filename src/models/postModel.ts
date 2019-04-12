import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Posts = new Schema(
  {
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
  }
);

module.exports = exports = mongoose.model('posts', Posts); 
