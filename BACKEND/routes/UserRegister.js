const router = require('express').Router();
let UserRegister_Model = require('../models/UserRegister_Model');
const jwt = require('jsonwebtoken');
// import {getInstructor} from '../controllers/testController.js';

// register User----------------------------

router.route("/add").post((req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const mobileNumber = req.body.mobileNumber;
    const email = req.body.email;
    const password = req.body.password;
    const status = req.body.status;
    

    const newuser = new UserRegister_Model({
        firstName,
        lastName,
        mobileNumber,
        email,
        password,
        status,
        registerAt:Date.now(),
        // userRoleStatus,
        // accountStatus,
        
    })

    newuser.save().then(()=>{
        res.json("New User Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//---------------------------------------------------

//login----------------------------------------

router.post("/login", async (req, res) => {
   
    const user = await UserRegister_Model.findOne({email:req.body.email, password:req.body.password});
    if (user){

        
    const tokendetails= {email:req.body.email};
    const accessToken=jwt.sign(tokendetails,process.env.TOKEN_KEY,{expiresIn: '1d'});

    const data = {
        status:true,
        email:user.email,
        id:user._id,
        accesstoken: accessToken,

    };

        res.send(data)
    }else{
        res.send({
            status:false
        })
    }

  });

//---------------------------------------------

//get one--------------------------------------


router.get("/get/:id",(req,res)=>{

    let userId = req.params.id;
    
    UserRegister_Model.findById(userId,(err,User)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            User
        });
    });
});

//------------------------------------------------


module.exports = router;
