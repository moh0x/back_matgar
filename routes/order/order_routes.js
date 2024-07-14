const express = require('express');
const router = express.Router();
const orderController = require('../../controllers/order/order_controller');
const { verifyToken } = require("../../utility/verify_token");
const { verifyAdmin } = require('../../utility/verify_role_admin');
const { verifyDeliviry } = require('../../utility/verify_role_deliviry');
const { verifyVendor } = require('../../utility/verify_role_vendor');
router.get('/myOrders',verifyToken,orderController.getMyOrders);
router.get('/mySummary',verifyToken,verifyAdmin,orderController.getMySummary);
router.get('/delivirySummary',orderController.getDelivirySummary);
router.post('/addOrder',verifyToken,orderController.addOrder);
router.delete('/deleteOrder',verifyToken,orderController.deleteOrder);
router.get('/admin/first',verifyToken,verifyAdmin,orderController.getOrderFirstAdmin);
router.get('/admin/agree',verifyToken,verifyAdmin,orderController.getOrderAgreeAdmin);
router.get('/admin/notAgree',verifyToken,verifyAdmin,orderController.getOrderNotAgreeAdmin);
router.get('/admin/deliviry',verifyToken,verifyAdmin,orderController.getOrderDeliviryAdmin);
router.get('/admin/deliviried',verifyToken,verifyAdmin,orderController.getOrderDeliviriedAdmin);
router.get('/admin/finish',verifyToken,verifyAdmin,orderController.getOrderFinishAdmin);
router.get('/admin/archive',verifyToken,verifyAdmin,orderController.getOrderArchiveAdmin);
router.delete('/admin/deleteOrder',verifyToken,verifyAdmin,orderController.deleteOrderAdmin);
router.patch('/admin/finishOrder',verifyToken,verifyAdmin,orderController.finshOrderAdmin);
router.patch('/admin/archiveOrder',verifyToken,verifyAdmin,orderController.archiveOrderAdmin);
router.patch('/deliviry/deliviryOrder',verifyToken,verifyDeliviry,orderController.deliviryOrderDeliviry);
router.patch('/deliviry/deliviriedOrder',verifyToken,verifyDeliviry,orderController.deliviriedOrderDeliviry);
router.get('/deliviry/agree',verifyToken,verifyDeliviry,orderController.getOrderAgreeDeliviry);
router.get('/deliviry/myOrders',verifyToken,verifyDeliviry,orderController.getOrderDeliviry);
router.patch('/deliviry/unDeliviryOrder',verifyToken,verifyDeliviry,orderController.unDeliviryOrderDeliviry);
router.get('/vendor/orders',verifyToken,verifyVendor,orderController.getOrdersVendor);
router.patch('/vendor/agreeOrder',verifyToken,verifyVendor,orderController.agreeOrderVendor);
router.patch('/vendor/notAgreeOrder',verifyToken,verifyVendor,orderController.notAgreeOrderVendor);
router.delete('/vendor/deleteOrder',verifyToken,verifyVendor,orderController.deleteOrderVendor);
  module.exports = 
    router
