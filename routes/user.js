const express   = require('express');
const route     = express.Router();
const userController     = require('../controllers/userController');

// GET ALL USERS
route.get('/users', userController.user_list);

// GET SINGLE USER
route.get('/users/:id', userController.user_detail);

module.exports = route;