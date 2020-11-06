const users     = require('../models/users');

exports.user_list = (req, res) => {
    res.status(200).json({
        success: true,
        content: users
    });
}

exports.user_detail = (req, res) => {
    const id = req.params.id;

    const user = users.find(item => parseInt(item.id) === parseInt(id));

    if(user) {
        return res.status(200).json({
            success: true,
            content: user
        });
    }

    return res.status(404).json({
        success: false,
        content: 'User not found'
    })
}