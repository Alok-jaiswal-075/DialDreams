const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')


const catchAsync = require('../Utility/catchAsync')
const appError = require('../Utility/appError')
const bcrypt = require('bcryptjs')
const User = require('../models/user')
const Cart = require('../models/cart')


router.post('/register', catchAsync(async (req, res) => {
    const { fname,lname,email,password,role,phone,address,pincode,state,profile } = req.body

    if (!email || !password || !role || !fname || !lname || !phone) throw new appError(400, 'All fields are required')

    const isUserExits = await User.findOne({ email: { $eq: req.body.email } })

    if (isUserExits) throw new appError(409, 'User already exits')

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
        fname,
        lname,
        phone,
        email,
        password: hashedPassword,
        role,
        address,
        pincode,
        state,
        profile
    })

    const newCart = new Cart();

    newCart.buyer = user
    user.cart = newCart;

    await newCart.save();
    await user.save();
    // console.log(user)

    res.json({"msg":"Registration Successful"})
}))



router.post('/login', catchAsync(async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) throw new appError(400, 'All fields are required')

    const user = await User.findOne({ email: { $eq: email } })

    if (!user) throw new appError(401, 'Invalid Credentials')

    if (bcrypt.compareSync(password, user.password)) {

        const token = jwt.sign({
            email: user.email,
            role: user.role,
        },
            process.env.JWT_SECRET);


        res.cookie('token', token, {
            expires: new Date(Date.now() + 25892000000), // 30 * 24 * 60 * 60 * 1000
            secure: true,
            httpOnly: true
        })


        res.json({ msg: 'Login successful', role:user.role })
    }
    else throw new appError(401, 'Invalid Credentials')
}))



module.exports = router