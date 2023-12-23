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



router.get('/get-cart', isLoggedIn,isBuyer, catchAsync(async (req, res) => {
    // console.log("hello")
    const email = req.user.email
    const user = await User.findOne({ email: email }).populate('cart');
    const cart = await Cart.findById(user.cart._id).populate('products.mobile')

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

    const existingProductIndex = cart.products.findIndex(
        (product) => product.mobile._id.toString() === mobile_id
    );

    if (existingProductIndex === -1) {
        cart.products.push({ mobile, quantity: 1, total: mobile.price });
        await cart.save();
        res.json({ msg: 'Added to cart' });
    } else {
        res.json({ msg: 'Product already in the cart' });
    }
}))


router.post('/update-cart', isLoggedIn, isBuyer, catchAsync(async (req, res) => {
    const cartDetails = req.body;

    const user = await User.findOne({ email: req.user.email }).populate('cart');

    if (!user) {
        throw new appError(404, 'User not found');
    }

    const cart = await Cart.findById(user.cart._id).populate('products.mobile');

    if (!cart) {
        throw new appError(404, 'Cart not found');
    }

    const updatedProductsIds = cartDetails.products.map((updatedProduct) => updatedProduct._id.toString());
    
    cart.products = cart.products.filter(
        (product) => updatedProductsIds.includes(product._id.toString())
    );

    cart.products.forEach((cartProduct) => {
        const updatedProduct = cartDetails.products.find(
            (product) => product._id === cartProduct._id.toString()
        );

        if (updatedProduct) {
            if (updatedProduct.quantity <= 0) {
                cart.products = cart.products.filter(
                    (product) => product._id.toString() !== updatedProduct._id
                );
            } else {
                cartProduct.quantity = updatedProduct.quantity;
                cartProduct.total = updatedProduct.total;
            }
        }
    });

    await cart.save();

    res.json(cart);
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
    // console.log(user.orders)

    res.json(cart);

}));


module.exports = router