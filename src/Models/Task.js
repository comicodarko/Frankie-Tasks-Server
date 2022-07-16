const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  label: String,
  category: {
    label: String,  
    iconPath: String,  
  },
  checked: Boolean,
  dates: {
    initial: Date,
    checked: Date,
    final: Date,
  },
})

module.exports = mongoose.model('Tasks', TaskSchema);