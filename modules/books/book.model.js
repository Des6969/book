const { Schema, model } = require("mongoose");
const blogSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  categories: { type: Array },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
module.exports = new model("blog", blogSchema);
