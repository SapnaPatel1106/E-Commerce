const mongoose = require('mongoose')


const reviewModelSchema = new mongoose.Schema({
    addReview: {
        type: String,
        required: true,
    },
    reviewImage: {
        type: String,
    },
    rating: {
        type: Number
    },
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true,
    },
})

reviewModelSchema.set('timestamps', true)
module.exports = mongoose.model('review', reviewModelSchema)
