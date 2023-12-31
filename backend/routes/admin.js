const express = require('express');
const catchAsync = require('../Utility/catchAsync');
const appError = require('../Utility/appError')
const router = express.Router();

const User = require('../models/user')
const Order = require('../models/order');
const Mobile = require('../models/mobile')
const Cart = require('../models/cart')
const { isLoggedIn, isAdmin } = require('../middleware');



router.get('/', isLoggedIn,isAdmin, catchAsync(async (req, res) => {
    const email = req.user.email
    const user = await User.findOne({ email: email });
    const orders = await Order.find().populate('mobile').populate('buyer');
    const mobiles = await Mobile.find();

    if (!user) throw new appError(404, 'User not found')
 
    res.json({user,orders,mobiles})
}))



router.post('/add-mobile', isLoggedIn, isAdmin, catchAsync(async (req, res) => {
    const { mobileDetails, images } = req.body

    const { price, quantity,storage,discount,fcamera,bcamera, ...otherDetails } = mobileDetails;

    const newMobile = new Mobile({
        price: parseFloat(price),
        quantity: parseInt(quantity),
        fcamera:parseInt(fcamera),
        bcamera:parseInt(bcamera),
        storage:parseInt(storage),
        discount:parseFloat(discount),

        ...otherDetails,
        images
    });

    newMobile.save();

    res.json(newMobile)
}))


router.put('/update-order-status/:order_id', isLoggedIn, isAdmin, catchAsync(async (req, res) => {
    const {order_id} = req.params

    const order = await Order.findById(order_id);

    if(order.status === 'pending') order.status = 'delivered'
    else  order.status = 'pending'

    order.save();

    res.json({ 'msg': 'Updated the order status' })
}))


module.exports = router