const fs = require('fs');

const Category = require('../Models/Category');

module.exports = { 
  async getIcons(req, res) {
    fs.readdir(__dirname + '/../public/categories' , (err, files) => {
      if(err) {
        res.status(500);
        console.log(err)
      } else {
        const iconPaths = files.map(file => `/public/categories/${file}`);
        res.json(iconPaths);
      }
    })
  },

  async get(req, res) {
    Category.find().then(result => {
      res.json(result);
    }).catch(err => {
      res.status(500);
      res.json({ message: `${err}` });
    })
  },

  async post(req, res) {
    const { label, iconPath } = req.body;

    const exist = await Category.findOne({ label });

    if(!exist) {
      Category.create({ label, iconPath }).then(() => {
        res.status(201);
        res.json({ message: 'Criado com sucesso.' })
      }).catch(err => {
        res.status(500);
        res.json({ message: `${err}` });
      });
    } else {
      console.log('existe');
      res.status(409);
      res.json({ message: 'Categoria já existe.' })
    } 
  }
}