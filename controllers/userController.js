const users     = require('../models/users');

exports.user_list = (req, res) => {
    res.status(200).json(users);
}