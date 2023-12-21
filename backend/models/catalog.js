const mongoose = require('mongoose')
const Mobile = require('./mobile')
const User = require('./user')

const catalogSchema = mongoose.Schema({
    "added_by": {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    "mobiles": [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Mobile'
        }
    ]
})

module.exports = mongoose.model('Catalog',catalogSchema)