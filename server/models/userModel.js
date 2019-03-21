const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    profileImage: String,
    username: {
        type: String,
        unique: true,
        required: true
    },
    password:{
        required: true,
        type: String
    },
    service: [
        {
            businessName: String,
            serviceName: String,
            serviceDescription: String,
            minCost:{
                type: Number,
                default: 0
            },
            maxCost:{
                type: Number,
                default: 0
            }        
        }
    ],
    phoneNumber: Number,
    email: String,
    location: String,
    swapBucks: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('User', userSchema)