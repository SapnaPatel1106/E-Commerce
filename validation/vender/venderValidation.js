const { join } = require("path")
const { default: common } = require("joi/lib/common")

const vender = require('./venderSchema')


module.exports = {
    registerVenderValidation: async (req, res, next) => {
        const value = await vender.registerVender.validate(req.body,{ abortEarly: false })
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    },
    loginVenderValidation: async (req,res,next)=>{
        const value = await vender.loginVender.validate(req.body,{abortEarly:false})
        if(value.error){
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        }else{
            next()
        }
    }
}
