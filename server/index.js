const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
require('dotenv').config();
const expressJwt = require('express-jwt')

app.use(express.json());
app.use('/api', expressJwt({secret: process.env.SECRET}))

app.use('/api/services', require('./routes/serviceRoutes'))
app.use('/auth', require('./routes/authRoutes'))

app.use((err, req, res, next) => {
    console.error(err)
    if(err.name === 'UnauthorizedError'){
        res.status(err.status)
    }
    return res.send({message: err.message })
})

mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true}).then(() => {
    console.log('Connected to MongoDB')
}).catch(err => console.log(err))



app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})