const express = require('express');
const router= express.Router();
const product = require('../controllers/productController');
const {productUpload} = require('../middlewares/imageStorage')
const validation= require('../validation/product/productValidation')


router.post(
    '/addproduct/:venderId',
    productUpload.single('productPic'),
    validation.addProductValidation,
    product.addProduct
)
router.get(
    '/productlist',
    product.productList
)
router.get(
    '/productdetails/:id',
    product.productDetails
)
router.delete(
    '/deleteproduct/:id',
    product.deleteProduct
)
router.patch(
    '/updateproduct/:id',
    product.updateProduct
)

module.exports= router