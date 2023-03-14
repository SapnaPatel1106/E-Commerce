const express = require('express');
const router= express.Router();
const vender = require('../controllers/venderController');
const {upload} = require('../middlewares/imageStorage')
const auth = require('../middlewares/authMiddleware')
const validation = require('../validation/vender/venderValidation')


router.post(
    '/registervender',
    upload.single("logo"),
    validation.registerVenderValidation,
    vender.registerVender
);
router.post(
    '/loginvender',
    auth.isVender,
    vender.loginVender
);
router.post(
    '/sendemail',
    // auth.checkUserAuth,
    // auth.isVender,
    vender.venderResetPasswordSendEmail
)
router.post(
    '/updatepassword/:id/:token',
   // auth.checkUserAuth,
    vender.updatePassword
)

module.exports= router;
