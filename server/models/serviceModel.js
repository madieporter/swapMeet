const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema ({
    service: {
        type: String,
        required: true
    },
    serviceType: {
        type: String,
        required: true
    },
    minCost:{
        type: Number,
        default: 0,
        required: true
    },
    maxCost:{
        type: Number,
        default: 0,
        required: true
    },
    swapper: [{
        firstName: String,
        lastName: String,
        businessName: String,
        serviceName: String,
        serviceDescription: String,
        phoneNumber: Number,
        email: String,
        city: String,
        state: String
    }]
})

module.exports = mongoose.model('Service', serviceSchema)