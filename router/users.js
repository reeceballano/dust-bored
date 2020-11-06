const express   = require('express');
const route     = express.Router();
const users     = require('../fake_data/users');

route.get('/users', (req, res) => { 
    res.status(200).json({
        success: true,
        content: users
    });
})

module.exports = route;