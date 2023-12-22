const mongoose = require('mongoose');

const mobileSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    os: {
        type: String,
        required:true
    },
    memory: {
        type: String
    },
    storage: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
    processor: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required:true
    },
    discount: {
        type: Number
    },
    colour: {
        type: String,
        required: true
    },
    fcamera: {
        type: Number,
        required: true
    },
    bcamera: {
        type: Number,
        required: true
    },
    images : [
        {
            type : String
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

mobileSchema.pre('save', function (next) {
    if (!this.isNew) {
        this.date = new Date(); 
    }
    next();
});

module.exports = mongoose.model('Mobile', mobileSchema);
