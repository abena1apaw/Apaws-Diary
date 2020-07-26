const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const BlogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: Date.now
  }
});
module.exports = Blog = mongoose.model("blogs", BlogSchema);