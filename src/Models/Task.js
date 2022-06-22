const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  label: String,
  category: {
    label: String,  
    iconPath: String,  
  },
  checked: Boolean,
  date: Date,
  checkedDate: Date
})

module.exports = mongoose.model('Tasks', TaskSchema);