const express   = require('express');
const route     = express.Router();
const userController     = require('../controllers/userController');

route.get('/users', userController.user_list);

module.exports = route;