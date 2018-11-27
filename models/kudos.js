const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var KudosSchema = new Schema({
  title: {
    type: String
  }, 
  body: {
    type: String
  },
  from: {
    type: String
  },
  to: {
    type: String
  }
  
  
});

const kudos = mongoose.model("kudos", KudosSchema);

module.exports = kudos;