const productModelSchema = require('../models/productModelSchema')


const addProduct= async (req,res) =>{
    const venderId=req.params.venderID;
    try{
        const productAdd = await new productModelSchema(req.body)
        const filePath=`/uploads/${req.file.filename}`;
        productAdd.productPic= filePath;
        try{
            const Blog = await productAdd.save();
            res.status(201).json({
                success:true,
                message:"Product added successfully",
            })
        }catch(err){
            res.status(400).json({
                success:false,
                message:"Error occur"+err.message,
            });
        }
    }catch(err){
        res.status(400).json({
            success:false,
            message:"Error occur"+err.message,
        });
    }
}

const productList = async (req, res) => {
    console.log(req.body)
    try {
        const getProduct = await productModelSchema.find();
        res.status(200).json({
            success: true,
            message: "Product list are displayed",
            value: getProduct,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "error occur" + err.message
        });
    }
}

const productDetails = async (req, res) => {
    //let id = req.params.id;
    try {
        const detailProduct = await productModelSchema.findOne({ productId :req.params.productId})
            .populate({
                path: "venderID",
                select: "venderName venderEmail city",
            });
        return res.status(200).json({
            success: true,
            message: "Here is the product",
            data: detailProduct
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "error occur" + err.message
        });
    }
}

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const deleteProduct = await productModelSchema.findByIdAndDelete(id, { $set: req.body });
        res.status(200).json({
            success: true,
            message: "Your product successfully deleted"
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

const updateProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const updateProduct = await productModelSchema.findByIdAndUpdate(productId, { $set: req.body });
        updateProduct.save();
        res.status(201).json({
            success: true,
            message: "Product edited successfully",
       });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "error occur" + err.message
        });
    }
}

module.exports={
    addProduct,
    productList,
    productDetails,
    deleteProduct,
    updateProduct
}
