const BlogModel = require("./book.model");

const create = (payload) => {
  return BlogModel.create(payload);
};
const get = () => {
  return BlogModel.find();
};
const getById = (id) => {
  return BlogModel.findOne({ id });
};
const updateById = (id) => {
  return BlogModel.updateone({ id }, payload);
};
const deleteById = (id) => {
  return BlogModel.deleteOne({ id });
};
module.exports = { create, get, getById, updateById, deleteById };
