const express = require('express');
const router = express.Router();
const user = require('./userRoutes')
const vender=require('./venderRoutes')
const product=require('./productRoutes')


router.use('/user', user);
router.use('/vender',vender);
router.use('/product',product);

module.exports = router;
