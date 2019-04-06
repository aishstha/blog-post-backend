import mongoose from "mongoose";

let Schema = mongoose.Schema;
export const Users = new Schema({
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

Users.statics = {
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

module.exports = exports = mongoose.model("users", Users);
