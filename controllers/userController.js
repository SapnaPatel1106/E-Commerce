const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const sendMailer = require('../services/emailServices')
const userModelSchema = require('../models/userModelSchema');


const registerUser = async (req, res) => {
    try {
        const isEmailExists = await userModelSchema.findOne({ userEmail: req.body.userEmail });
        if (isEmailExists) {
            res.status(409).json({
                success: false,
                message: "User with this email is already exist"
            });
        } else {
            const userData = await new userModelSchema(req.body);
            const salt = await bcrypt.genSalt(10);
            userData.password = await bcrypt.hash(req.body.password, salt);
            try {
                const filePath = `/uploads/${req.file.filename}`;
                userData.profilePic = filePath;
                userData.save();
                res.status(201).json({
                    success: true,
                    message: "Account registered successfully."
                });
            } catch (err) {
                res.status(400).json({
                    success: false,
                    message: "Error occur " + err.message
                });
            }
        }
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Error occur " + err.message
        });
    }
}

const loginUser = async (req, res) => {
    try {
        const { userEmail, password } = req.body;
        if (userEmail && password) {
            const userData = await userModelSchema.findOne({ userEmail: userEmail })
            if (userData != null) {
                const isPasswordMatch = await bcrypt.compare(password, userData.password);
                if (userData.userEmail === userEmail && isPasswordMatch) {
                    const token = jwt.sign({ userId: userData._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' });
                    res.status(200).send({
                        success: true,
                        message: "Login successfull",
                        "userDetail": userData,
                        token: token,
                    });
                } else {
                    res.status(401).send({
                        success: false,
                        message: "Email or password is not valid",
                    });
                }
            } else {
                res.status(401).send({
                    success: false,
                    message: "You are not a register user",
                });
            }
        }
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Error occur" + err.message
        });
    }
}

const resetPasswordSendEmail = async (req, res) => {
    const { userEmail } = req.body;
    try {
        const user = await userModelSchema.findOne({ userEmail: userEmail });
        if (user != null) {
            const secret = process.env.JWT_SECRET_KEY;
            const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '50m' });
            const id = user._id
            const emailSend = await sendMailer.sendEmail(userEmail, token, id)
            return res.status(201).json({
                success: true,
                message: "The reset password link is send to your register email account",
                token: token,
                userId: user._id,
            });
        } else {
            res.status(403).json({
                success: false,
                message: "User email is not valid",
            });
        }
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message,
        })
    }
}

const updatePassword = async (req, res) => {
    const { id, token } = req.params;
    const { newPassword, confirmPassword } = req.body;
    try {
        const checkUser = await userModelSchema.findById(id);
        if (checkUser != null) {
            const secretKey = process.env.JWT_SECRET_KEY;
            jwt.verify(token, secretKey);
            if (newPassword === confirmPassword) {
                const salt = await bcrypt.genSalt(10);
                const password = await bcrypt.hash(confirmPassword, salt);
                await userModelSchema.findByIdAndUpdate(checkUser._id, {
                    $set: { password: password },
                });
                res.status(200).json({
                    success: true,
                    message: "Password update sucessfully",
                });
            } else {
                res.status(403).json({
                    success: false,
                    message: "Password and confirmPassword are not match"
                });
            }
        } else {
            res.status(403).json({
                success: false,
                message: "Email user is not found",
            });
        }
    } catch (err) {
        res.status(400).json({
            success: false,
            mesaage: err.message,
        });
    }
}


module.exports = {
    registerUser,
    loginUser,
    resetPasswordSendEmail,
    updatePassword
}
