const multer = require('multer');
const path = require('path');


const imageStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, "..", "/venderUploads"));
    },
    filename: (req, file, callback) => {
        var ext = file.originalname.substring(file.originalname.indexOf("."));
        callback(null , `image_${Date.now()}.${file.originalname}`);
    },
})

const isImage =(req,file,callback) => {
    if(file.mimetype.startsWith("image")){
        callback(null , true)
    }else{
        callback(new error("Only images are allowed"));
    }
}

const venderUpload = multer({
    storage : imageStorage,
    fileFilter: isImage,
})

module.exports = {
    venderUpload
}