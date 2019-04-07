import mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const Users = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: false
    },
    loginType: {
      type: String
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
    userId: {
      type: String
    }
  }
);

module.exports = exports = mongoose.model('users', Users); 
