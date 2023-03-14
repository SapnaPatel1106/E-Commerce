const mongoose = require('mongoose')


const venderModelSchema = new mongoose.Schema({
    venderName: {
        type: String,
        required: true,
    },
    venderEmail: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone_no: {
        type: Number,
        required: true,
    },
    logo: {
        type: String,
    },
    venderAbout:{
        type:String,
        required:true,
    },
    venderRole: {
        type: String,
        default: 'vender',
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true,
    },
})

venderModelSchema.set('timestamps', true)
module.exports = mongoose.model('vender', venderModelSchema)
