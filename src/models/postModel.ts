import mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const Posts = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  postId: {
    type: String
  },
  userId: {
    type: String,
    required: true
  }
});

module.exports = exports = mongoose.model('posts', Posts);
