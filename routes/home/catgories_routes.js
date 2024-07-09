const express = require('express');
const router = express.Router();
const { verifyToken } = require("../../utility/verify_token");
const categoriesControoler = require('../../controllers/home/categories_controller');
const { verifyAdmin } = require('../../utility/verify_role_admin');
const multer = require('multer');
router.get('/getAllCategories',verifyToken,categoriesControoler.getAllCategories);
router.get('/getAllCategoriesAdmin',verifyToken,verifyAdmin,categoriesControoler.getAllCategoriesAdmin);
router.delete('/delete',verifyToken,verifyAdmin,categoriesControoler.deleteCategoryAdmin);
router.post('/add',verifyToken,verifyAdmin,categoriesControoler.upload.single('file'),categoriesControoler.addCategoryAdmin);
module.exports = 
router