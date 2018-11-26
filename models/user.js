const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required"
  },
  kudos: [
    {
      type: Schema.Types.ObjectId,
      ref: "kudos"
    }
  ]
});

const user = mongoose.model("user", UserSchema);

module.exports = user;