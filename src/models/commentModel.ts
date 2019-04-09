import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let childSchema = new Schema({ description: {
  type: String,
  required: true
},
users: {type: mongoose.Schema.Types.ObjectId,
  ref: 'users',
  required: true
},
createdAt: {
  type: Date,
  default: Date.now
} });

const Comments = new Schema(
  {
    description: {
      type: String,
      required: true
    },
    users: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    posts: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'posts',
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    },
    sub_comments: [childSchema]
  }
);

module.exports = exports = mongoose.model('comments', Comments); 
