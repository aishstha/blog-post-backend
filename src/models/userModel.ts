import mongoose from "mongoose";

let Schema = mongoose.Schema;

/**
 * User Schema
 */
export const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  loginType: {
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
  userId: {
    type: String,
    required: true
  }
});

/**
 * Statics
 */
UserSchema.statics = {
  /**
   * Fetch all users
   */
  fetchAll() {
    return this.find()
      .exec()
      .then((res: any) => {
        return res;
      });
  },

  fetchById(id: string) {
    return this.find({ id })
      .exec()
      .then((res: any) => {
        return res;
      });
  }
};

/**
 * @typedef Users
 */
module.exports = exports = mongoose.model("Users", UserSchema);
