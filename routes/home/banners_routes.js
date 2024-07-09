const express = require('express');
const router = express.Router();
const { verifyToken } = require("../../utility/verify_token");
const bannersController = require('../../controllers/home/banners_controllerl');
const { verifyAdmin } = require('../../utility/verify_role_admin');
router.get('/getAllBanners',verifyToken,bannersController.getAllBanners);
router.get('/getAllBannersAdmin',verifyToken,verifyAdmin,bannersController.getAllBannersAdmin);
router.delete('/delete',verifyToken,verifyAdmin,bannersController.deleteBannerByIdAdmin);
module.exports = 
router