const express = require('express');
const catchAsync = require('../Utility/catchAsync');
const appError = require('../Utility/appError')
const router = express.Router();

const User = require('../models/user')
const Order = require('../models/order');
const Mobile = require('../models/mobile')
const Cart = require('../models/cart')
const { isLoggedIn, isBuyer } = require('../middleware');



router.get('/', isLoggedIn, catchAsync(async (req, res) => {
    const email = req.user.email
    const user = await User.findOne({ email: email }).populate({
        path: 'orders',
        populate: {
            path : 'mobile'
        }
    });

    if(!user) throw new appError(404, 'User not found')

    res.json(user)
}))



router.get('/get-cart', isLoggedIn, catchAsync(async (req, res) => {
    const email = req.user.email
    const user = await User.findOne({ email: email }).populate('cart');
    const cart = await Cart.findById(user.cart._id)

    if (!user) throw new appError(404, 'User not found')
    if (!cart) throw new appError(404, 'Cart not found');

    res.json(cart)
}))


router.post('/add-to-cart/:mobile_id',isLoggedIn,isBuyer,catchAsync(async (req,res)=>{
    const email = req.user.email
    const {mobile_id} = req.params

    const user = await User.findOne({email:email}).populate('cart');
    const mobile = await Mobile.findById(mobile_id);
    const cart = await Cart.findById(user.cart._id);

    if (!user) throw new appError(404, 'User not found')
    if (!mobile) throw new appError(404, 'Mobile not found')
    if (!cart) throw new appError(404, 'Cart not found');

    cart.products.push({mobile,quantity:1,total:mobile.price})

    cart.save();

    res.json({'msg':'Added to cart'})
}))


router.post('/update-cart', isLoggedIn, isBuyer, catchAsync(async (req, res) => {
    const email = req.user.email;
    const updates = req.body.updates;

    const user = await User.findOne({ email: email }).populate('cart');

    const cart = await Cart.findById(user.cart._id);

    if (!user) throw new appError(404, 'User not found')
    if (!cart) throw new appError(404, 'Cart not found')


    for (const update of updates) {
        const cartItem = cart.products.find(item => item._id.equals(update.cartItemId));

        if (!cartItem) {
            throw new appError(404, 'Cart item not found');
        }

        cartItem.quantity = update.quantity;

        const mobile = await Mobile.findById(cartItem.mobile);

        if (!mobile) {
            throw new appError(404, 'Mobile not found');
        }

        const newTotal = mobile.price * update.quantity;
        cartItem.total = newTotal;
    }

    await cart.save();

    res.json({ cart });
}));



router.post('/order-item/:id', isLoggedIn, isBuyer, catchAsync(async (req, res) => {
    const email = req.user.email;
    const {mobile_id} = req.params

    const user = await User.findOne({ email: email }).populate('cart');
    const mobile = await Mobile.findById(mobile_id);

    if (!user) throw new appError(404, 'User not found')
    if (!mobile) throw new appError(404, 'Mobile not found')

    const {quantity} = req.body;
    const total = mobile.price * quantity;

    const order = new Order({buyer:user,mobile,quantity,total,status:'pending'});

    user.orders.push(order)

    order.save();
    user.save();
    
}))


router.post('/order-a-cart', isLoggedIn, isBuyer, catchAsync(async (req, res) => {
    const email = req.user.email;

    const user = await User.findOne({ email: email }).populate('cart');
    const cart = await Cart.findById(user.cart._id).populate('products.mobile');

    if (!user) throw new appError(404, 'User not found')
    if (!cart) throw new appError(404, 'Cart not found')

    const orders = [];

    for (const cartItem of cart.products) {
        const mobile = cartItem.mobile;
        const { quantity } = cartItem;
        const total = mobile.price * quantity;

        const order = new Order({
            buyer: user,
            mobile, quantity, total, status: 'pending' 
        });

        orders.push(order);

        user.orders.push(order);
    }

    await Order.insertMany(orders);

    cart.products = [];

    await cart.save();

    await user.save();

    res.json({ msg: 'Orders created from cart items' });

}));


module.exports = router