const express = require('express');
const routes = express.Router();

const habitsController = require('./Controllers/habitsController');

routes.get('/', habitsController.showAll);
routes.get('/:id', habitsController.show);
routes.post('/create', habitsController.create);
routes.delete('/delete/:id', habitsController.delete);

module.exports = routes;
