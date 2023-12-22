const mongoose = require('mongoose')
const Mobile = require('./mobile')
const User = require('./user')

const cartSchema = mongoose.Schema({
    "buyer": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    'products' : [
        {
            'mobile': {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Mobile'
            },
            'quantity': {
                type: Number,
                default: 1
            },
            'total': {
                type: Number
            }
        }
    ]
});


module.exports = mongoose.model('Cart', cartSchema)