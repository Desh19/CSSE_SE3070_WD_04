const router = require('express').Router();
let TopUpCard_model = require("../models/TopUpCard_model");
const jwt =require('jsonwebtoken');

router.route("/add").post((req,res)=>{

    
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const cardholdername = req.body.cardholdername; 
    const cardNum = req.body.cardNum;
    const cardexpiryDate = req.body.cardexpiryDate;
    const cvc = req.body.cvc;
    const ammount = req.body.ammount;
    const AccountantId = req.body.AccountantId;
    const date = req.body.date;

    const newTopUpCard_model = new TopUpCard_model({

        
        firstName,
        lastName,
        cardholdername,
        cardNum,
        cardexpiryDate,
        cvc,
        ammount,
        AccountantId,
        date

       
    })

    newTopUpCard_model.save().then(()=>{
        res.json("Payment Added")
    }).catch((err)=>{
        console.log(err)
    })

})

module.exports = router;