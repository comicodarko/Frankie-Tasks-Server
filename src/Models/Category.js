const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  label: String,
  iconPath: String
})

module.exports = mongoose.model('Categories', CategorySchema);