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

UserSchema.pre('save', function (next) {
  let now = Date.now()

  // this.updatedAt = now
  // // Set a value for createdAt only if it is null
  // if (!this.createdAt) {
  //   this.createdAt = now
  // }
  // Call the next function in the pre-save chain
  next()
})

const Users = mongoose.model("Users", UserSchema);
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

  fetchById(id: number) {
    return this.find({ id })
      .exec()
      .then((res: any) => {
        return res;
      });
  },

  create() {
    return this.save({ name: "test" })
      .exec()
      .then((res: any) => {
        return res;
      });
  }
};

/**
 * @typedef Users
 */
module.exports = exports = Users;
