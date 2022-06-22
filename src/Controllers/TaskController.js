const Task = require('../Models/Task');

module.exports = { 
  async get(req, res) {
    Task.find().then(result => {
      res.json(result);
    }).catch(err => {
      res.status(500);
      res.json({ message: `${err}` });
    })
  },

  async post(req, res) {
    const { label, category } = req.body;
    Task.create({
      label, 
      category,
      date: new Date(), 
      checked: false,
      checkedDate: null
    }).then(() => {
      res.json({ message: 'Task criada com sucesso!' });
    }).catch(err => {
      res.status(500);
      res.json({ message: `${err}` });
    })
  },

  async put(req, res) {
    const { id, checked } = req.body;
    Task.findByIdAndUpdate(id, {
      checked, 
      checkedDate: checked ? new Date() : null
    }).then(() => {
      res.json({ message: 'Task editada com sucesso!' });
    }).catch(err => {
      res.status(500);
      res.json({ message: `${err}` });
    })
  }
}