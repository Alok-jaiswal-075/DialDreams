const mongoose = require('mongoose')
const Order = require('./order')
const Mobile = require('./mobile')

const userSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        required: true
    },
    role: {
        type: String,
        enum: ['buyer', 'admin'],
        required: true
    },
    phone: {
        type: String,
        required:true,
        unique:true
    },
    profile : {
        type:String
    },
    address: {
        type: String
    },
    pincode: {
        type: String
    },
    state: {
        type: String
    },
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
        }
    ],
    cart : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Mobile'
        }
    ]
});


module.exports = mongoose.model('User', userSchema)