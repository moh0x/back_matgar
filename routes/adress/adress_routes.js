const express = require('express');
const router = express.Router();
const adressController = require('../../controllers/adress/adress_controller');
const { verifyToken } = require("../../utility/verify_token");
const { verifyUser } = require('../../utility/verify_role_user');
router.get('/myAdreses',verifyToken,verifyUser,adressController.getMyAdresses);
router.post('/addAdress',verifyToken,verifyUser,adressController.addAdress);
router.delete('/deleteAdress',verifyToken,verifyUser,adressController.deleteAdress);
  module.exports = 
    router
