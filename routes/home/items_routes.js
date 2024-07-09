const express = require('express');
const router = express.Router();
const { verifyToken } = require("../../utility/verify_token");
const itemsControoler = require('../../controllers/home/items_controller');
const { verifyAdmin } = require('../../utility/verify_role_admin');
const multer = require('multer');
const { verifyVendor } = require('../../utility/verify_role_vendor');
router.get('/getAllItems',verifyToken,itemsControoler.getAllItems);
router.get('/getSearchItem',verifyToken,itemsControoler.getSearchItems);
router.get('/getLikesItem',verifyToken,itemsControoler.getLikesItems);
router.get('/getCartItem',verifyToken,itemsControoler.getCartItems);
router.get('/getLatestItem',verifyToken,itemsControoler.getLatestItems);
router.get('/admin/getLatestItemItemsVerify',verifyToken,verifyAdmin,itemsControoler.getLatestItemsVerifyAdmin);
router.get('/admin/getLatestItemItemsNotVerify',verifyToken,verifyAdmin,itemsControoler.getLatestItemsNotVerifyAdmin);
router.delete('/admin/deleteItem',verifyToken,verifyAdmin,itemsControoler.deleteItemAdmin);
router.patch('/admin/changeStatusVerify',verifyToken,itemsControoler.changeItemStatusAdmin);
router.post('/addImage',verifyToken,verifyVendor,itemsControoler.iUpload.single('image'),itemsControoler.addImage);
router.post('/addProduct',verifyToken,verifyVendor,itemsControoler.addProduct);
router.get('/vendor/getLatestItemItemsVerify',verifyToken,verifyVendor,itemsControoler.getLatestItemsVerifyVendor);
router.get('/vendor/getLatestItemItemsNotVerify',verifyToken,verifyVendor,itemsControoler.getLatestItemsNotVerifyVendor);
router.delete('/vendor/deleteItem',verifyToken,verifyVendor,itemsControoler.deleteItemVendor);
module.exports = 
router
