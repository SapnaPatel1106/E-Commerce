const mongoose = require('mongoose')


const cartModelSchema = new mongoose.Schema({
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'product'
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    quantity: {
        type: Number,
        required: true,
    },
    deliveryStatus: {
        type: Boolean,
        required: true,
        default: false,
    },
    paymentStatus: {
        type: Boolean,
        required: true,
        default: false,
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true,
    },
})

cartModelSchema.set('timestamps', true)
module.exports = mongoose.model('cart', cartModelSchema)
