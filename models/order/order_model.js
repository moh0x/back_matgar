const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    orderFirstDate:{
        type:Date,
        required:true,
    },
    orderlastDate:{
        type:Date,
        required:true,
    },
    orderCount:{
        type:Number,
        required:true,
      
        maxLength:10
    },
    orderNotAgree:{
        type:String,
        required:true,
    },
    orderDetails:{
        type:String,
        required:true,
     
        maxLength:100
    },
    orderUserId:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    orderUserName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    orderUserEmail:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    }, orderUserPhone:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    orderUserAdressId:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    orderUserAdressCity:{
        type:String,
        required:true,
       
        maxLength:30
    },
    orderUserAdressMiniCipality:{
        type:String,
        required:true,
        
        maxLength:30
    },
    orderUserAdressDistrict:{
        type:String,
        required:true,
        
        maxLength:50
    },
    orderVendorId:{
        type:String,
        required:true,
        maxLength:30
    },
    orderVendorName:{
        type:String,
        required:true,
        maxLength:30
    },
    orderVendorEmail:{
        type:String,
        required:true,
        maxLength:30
    }, orderVendorPhone:{
        type:String,
        required:true,
        
        maxLength:30
    },
    orderDeliviryId:{
        type:String,
        required:true,
        maxLength:30
    },
    orderDeliviryName:{
        type:String,
        required:true,
        maxLength:30
    },
    orderDeliviryEmail:{
        type:String,
        required:true,
        maxLength:30
   
    }, orderDeliviryPhone:{
        type:String,
        required:true,
        maxLength:30
    },
    orderStatusId:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    orderProductId:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    orderProductNameArabic:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    orderProductNameEnglish:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    orderShiping:{
        type:Number,
        required:true,
    },
    orderPrice:{
        type:Number,
        required:true,
    },
   
});
const Order = mongoose.model("Order",orderSchema);
module.exports = {Order};
