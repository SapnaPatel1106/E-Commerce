const mongoose = require('mongoose');


const productModelSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    productPic: {
        type: String,
    },
    productDescription: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    offerPrice: {
        type: Number,
    },
    features: {
        type: String,
        required: true,
    },
    specification: {
        type: String,
        required: true,
    },
    productRating: {
        type:Number,
        default: '0',
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        //required: true,
        ref: 'user',
    },
    venderID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'vender',
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true,
    },
})

productModelSchema.set('timestamps', true)
module.exports = mongoose.model('product', productModelSchema)
