import mongoose from "mongoose";

const Schema = mongoose.Schema;
export const Comments = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  commentId: {
    type: String,
    required: true
  },
  postId: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
});

module.exports = exports = mongoose.model("comments", Comments);
