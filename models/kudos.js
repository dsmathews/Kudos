const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var KudosSchema = new Schema({
  title: String,
  body: String
});

const kudos = mongoose.model("kudos", KudosSchema);

module.exports = kudos;