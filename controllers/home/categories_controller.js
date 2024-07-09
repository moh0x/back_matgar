const { Category } = require("../../models/home/categories_model");
const httpsStatus = require('../../constants/https_status');
const multer = require('multer');
const getAllCategories = async(req,res)=>{
    try {
      const limit = 15;
      const page = req.body.page || 1;
      const skip = (page - 1) * limit;
     var token =  req.headers.token;
     const categories = await Category.find().sort({categoryDate:-1}).limit(limit).skip(skip);
     res.status(200).json({"status":httpsStatus.SUCCESS,"data":categories});
    } catch (error){
     res.status(400).json({"status":httpsStatus.ERROR,"data":null,"message":"error"});
    }
 }
 const getAllCategoriesAdmin = async(req,res)=>{
  try {
    const limit = 15;
    const page = req.body.page || 1;
    const skip = (page - 1) * limit;
   var token =  req.headers.token;
   const categories = await Category.find().sort({categoryDate:-1}).limit(limit).skip(skip);
   res.status(200).json({"status":httpsStatus.SUCCESS,"data":categories});
  } catch (error){
   res.status(400).json({"status":httpsStatus.ERROR,"data":null,"message":"error"});
  }
}
const deleteCategoryAdmin = async(req,res)=>{
  try {
   const category = await Category.findById(req.body.categoryId);
   if (category) {
    await Category.findByIdAndDelete(req.body.categoryId);
    res.status(200).json({"status":httpsStatus.SUCCESS});
   } else {
    res.status(200).json({"status":httpsStatus.SUCCESS,"data":null,"message":"no category"});
   }
   
  } catch (error){
   res.status(400).json({"status":httpsStatus.ERROR,"data":null,"message":"error"});
  }
}
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 3000000 }, 
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }}
});
const addCategoryAdmin = async(req,res)=>{
  try {
   
    upload();
  
   res.status(200).json({"messaga":"aaaa"})
  } catch (error){
   res.status(400).json({"status":httpsStatus.ERROR,"data":null,"message":"error"});
  }
}

 module.exports = {
   getAllCategories,getAllCategoriesAdmin,deleteCategoryAdmin,addCategoryAdmin,upload,storage
   }