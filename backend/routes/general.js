const express = require('express');
const catchAsync = require('../Utility/catchAsync');
const appError = require('../Utility/appError')
const router = express.Router();

const User = require('../models/user')
const Order = require('../models/order');
const Mobile = require('../models/mobile')
const Cart = require('../models/cart')



router.get('/new-arrivals', catchAsync(async (req, res) => {
    const recentlyAddedPhones = await Mobile.find()
        .sort({ date: -1 }) 
        .limit(4); 

    res.json({mobiles:recentlyAddedPhones});
}))

router.get('/all-mobiles', catchAsync(async (req, res) => {
    const allphones = await Mobile.find()
        .sort({ date: -1 })

    res.json({ mobiles: allphones });
}))

router.get('/mobile/:id', catchAsync(async (req, res) => {
    const {id} = req.params

    const phone = await Mobile.findById(id)

    if(!phone) throw new appError(400,'Mobile does not exist')

    res.json(phone);
}))

module.exports = router