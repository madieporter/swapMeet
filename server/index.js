const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');

app.use(express.json());

app.use('/users', require('./routes/userRoutes'))
app.use('/services', require('./routes/serviceRoutes'))

mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true}).then(() => {
    console.log('Connected to MongoDB')
}).catch(err => console.log(err))



app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})