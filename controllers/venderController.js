const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const sendMailer = require('../services/venderEmailServices')
const venderModelSchema = require('../models/venderModelSchema');


const registerVender = async (req, res) => {
    try {
        const isEmailExists = await venderModelSchema.findOne({ venderEmail: req.body.venderEmail });
        if (isEmailExists) {
            console.log("h1");
            res.status(409).json({
                success: false,
                message: "Vender with this email is already exist"
            });
        } else {
            const venderData = await new venderModelSchema(req.body);
            const salt = await bcrypt.genSalt(10);
            venderData.password = await bcrypt.hash(req.body.password, salt);
            try {
                const filePath = `/uploads/${req.file.filename}`;
                venderData.logo = filePath;
                venderData.save();
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

const loginVender = async (req, res) => {
    try {
        const { venderEmail, password } = req.body;
        if (venderEmail && password) {
            const venderData = await venderModelSchema.findOne({ venderEmail: venderEmail })
            if (venderData != null) {
                const isPasswordMatch = await bcrypt.compare(password, venderData.password);
                if (venderData.venderEmail === venderEmail && isPasswordMatch) {
                    const token = jwt.sign({ venderId: venderData._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' });
                    res.status(200).send({
                        success: true,
                        message: "Login successfull",
                        "venderDetail": venderData,
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
                    message: "You are not a register vender",
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

const venderResetPasswordSendEmail = async(req,res)=>{
    const {venderEmail}=req.body;
    try{
        const vender = await venderModelSchema.findOne({venderEmail:venderEmail})
        if(vender!=null){
            const secret = process.env.JWT_SECRET_KEY;
            const token = jwt.sign({venderId:vender._id},secret,{expiresIn:"1D"});
            const id=vender._id
            const emailSend=await sendMailer.sendEmail(venderEmail,token,id)
            return res.status(201).json({
                success: true,
                message: "The reset password link is send to your register email account",
                token: token,
                venderId: vender._id,
            });
        }else {
            res.status(403).json({
                success: false,
                message: "Vender email is not valid",
            });
        }
    }catch(err){
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
        const checkVender = await venderModelSchema.findById(id);
        if (checkVender != null) {
            const secretKey = process.env.JWT_SECRET_KEY;
            jwt.verify(token, secretKey);
            if (newPassword === confirmPassword) {
                const salt = await bcrypt.genSalt(10);
                const password = await bcrypt.hash(confirmPassword, salt);
                await venderModelSchema.findByIdAndUpdate(checkVender._id, {
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
                message: "Email vender is not found",
            });
        }
    } catch (err) {
        res.status(400).json({
            success: false,
            mesaage: err.message,
        });
    }
}

module.exports={
    registerVender,
    loginVender,
    venderResetPasswordSendEmail,
    updatePassword
}
