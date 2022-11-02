const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const PaymentSchema = new mongoose.Schema(
    {
      AccountantId:{type: String, requried: true, trim: true},
      AccountantName:{type: String, requried: true, trim: true},
      cardholdername: {type: String, requried: true, trim: true},
      cardNum:{type: String, requried: true,trim: true},
      cardexpiryDate: {type: Date,required: false,},
      cvc: {type: String,required: false,},
      ammount: {type: String, requried: true},
      date: {type: String, requried: true}
     
    }
 
  );
  
const Payment = mongoose.model("TopUp_Payment",PaymentSchema);
module.exports = Payment; 