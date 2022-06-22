const { Router } = require('express');

const TaskController = require('./Controllers/TaskController');
const CategoryController = require('./Controllers/CategoryController');

const routes = Router();


routes.get('/tasks', TaskController.get);
routes.post('/tasks', TaskController.post);
routes.put('/tasks/:id', TaskController.put);

routes.get('/categoryIcons', CategoryController.getIcons);
routes.get('/categories', CategoryController.get);
routes.post('/categories', CategoryController.post);

module.exports = routes;