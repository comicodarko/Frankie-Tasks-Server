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
    const { label, category, dates } = req.body;
    Task.create({
      label, 
      category,
      dates: {
        initial: dates.initial ? dates.initial : new Date().toISOString().substring(0, 10),
        checked: null,
        final: dates.final ? dates.final : null
      },
      checked: false,
    }).then((data) => {
      res.json({ message: 'Task criada com sucesso!', data });
    }).catch(err => {
      res.status(500);
      res.json({ message: `${err}` });
    })
  },

  async put(req, res) {
    const { id } = req.params;
    const { checked } = req.body;
    Task.findById(id).then(doc => {
      if(doc) {
        doc.checked = checked,
        doc.dates.checked = checked ? new Date().toISOString().substring(0, 10) : null
        doc.save(() => res.json({ message: 'Task editada com sucesso!' }));
      } else {
        res.status(404);
        res.json({ message: 'Task não encontrada!'});
      }
    }).catch(err => {
      res.status(500);
      res.json({ error: err });
    })
  },

  async delete(req, res) {
    const { id } = req.params;
    Task.findByIdAndDelete(id).then((deleted) => {
      if(deleted) {
        res.json({ message: 'Task Deletada com sucesso!' });
      } else {
        res.status(404);
        res.json({ message: 'Task não encontrada' });
      }
    }).catch(error => {
      res.status(500);
      res.json({ message: `${error}` });
    });
  }
}