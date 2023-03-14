const express = require('express');
const router= express.Router();
const user = require('../controllers/userController');
const {upload} = require('../middlewares/imageStorage')
const auth = require('../middlewares/authMiddleware')
const validation = require('../validation/user/userValidation')


router.post(
    '/registeruser',
    upload.single("profilePic"),
    validation.registerUserValidation,
    user.registerUser
);
router.post(
    '/loginuser',
    validation.loginUserValidation,
    auth.isUser,
    user.loginUser
);
router.post(
    '/sendemail',
    //auth.checkUserAuth,
   // auth.isUser,
    user.resetPasswordSendEmail
);
router.post(
    '/updatepassword/:id/:token',
    //auth.checkUserAuth,
    //auth.isUser,
    user.updatePassword
)

module.exports= router;
