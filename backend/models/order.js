const mongoose = require('mongoose')
const Mobile = require('./mobile')
const User = require('./user')

const orderSchema = mongoose.Schema({
    "buyer": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    "mobile": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mobile'
    },

    "quantity": {
        type: Number,
        default: 1
    },

    "total": {
        type: Number,
        required: true
    },

    "status": {
        type: String,
        enum: ["pending", "delivered"],
        required: true

    }

})

module.exports = mongoose.model('Order', orderSchema)