const cookieParser = require('cookie-parser')
const express = require('express')
const { urlencoded } = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const upload = multer({dest:'uploads/'})
require('dotenv').config({ path: './config.env' })


const connectDB = require('./config/db')

const port = process.env.PORT || 3000

connectDB()

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())



const authRoutes = require('./routes/auth')
const buyerRoutes = require('./routes/buyer')
const adminRoutes = require('./routes/admin')


// app.get('/',(req,res)=>{
//     res.send('hello world')
// })

app.use('/api/auth', authRoutes)
app.use('/api/buyer',buyerRoutes)
app.use('/api/admin', adminRoutes)


app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).json({ "msg": err.message })
})


app.listen(port, () => {
    console.log(`App running on port : ${port}`)
})