const express            = require('express');
const route              = express.Router();
const userController     = require('../controllers/userController');
const rateLimit          = require('express-rate-limit');

const requestLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 2
});

// GET ALL USERS
route.get('/users', userController.user_list);

// GET SINGLE USER
route.get('/users/:_id', userController.user_detail);

// CREATE USER
route.post('/users', requestLimiter, userController.user_create);

// DELETE SINGLE USER
route.delete('/users', userController.user_remove);

// UPDATE SINGLE USER
route.post('/users/:_id', userController.user_update);

module.exports = route;