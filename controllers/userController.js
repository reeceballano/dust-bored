const mongoose          = require('mongoose');
const User              = require('../models/user');
const bcrypt            = require('bcryptjs');
const { userSchema, findUserSchema }    = require('../helpers/validation_schema');

exports.user_list = async (req, res) => {
    
    try {
        const users = await User.find().select('-password -role').exec();

        res.status(200).json({
            success: true,
            content: users
        });

    } catch(error) {
        res.status(400).json({
            success: false,
            content: error
        })
    }
}

exports.user_detail = async (req, res) => {
    try {
        const check = await findUserSchema.validateAsync(req.params);

        if(check) {
            const user = await User.findOne({ _id: check._id }).select('-password -role').exec();

            if(user) {
                return await res.status(200).json({
                    success: true,
                    content: user
                });
            }
        }

    } catch(error) {
        res.status(404).json({
            success: false,
            content: 'User not found!'
        })
    }

}

exports.user_create = async (req, res) => {
    try {
        const result = await userSchema.validateAsync(req.body);
        
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            name: result.name,
            username: result.username,
            email: result.email,
            password: bcrypt.hashSync(result.password, bcrypt.genSaltSync(10)),
        });

        user.save( (err) => {
            if(err) {
                return res.status(400).json({
                    success: false,
                    content: err.errmsg
                })
            }

            res.status(200).json({
                success: true,
                content: 'New user created'
            })
        })
    } catch(error) {
        res.send(error)
    }
}

exports.user_remove = async (req, res) => {
    try {
        // FIND USER
        const result = await findUserSchema.validateAsync(req.body);

        const user = await User.findOne({ _id: result._id });

        if(user) {
            // DELETE THE USER IF FOUND
            await User.deleteOne({ _id: result._id });
            
            return await res.status(200).json({
                success: true,
                content: `${ result._id } has been deleted!`
            })
        }

        return await res.status(404).json({
            success: false,
            content: 'Cant find the user'
        })
    } catch(error) {
        res.status(400).json({
            success: false,
            content: `Something is wrong please try again later! ${error}`
        })
    }
}