const mongoose   = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { 
        type: String, 
        min: 3 
    },
    email: {
        type: String,
        unique: true
    },
    username: {
        type: String,
        unique: true,
        min: 3
    },
    password: {
        type: String,
        min: 6
    },
    role: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('User', userSchema);