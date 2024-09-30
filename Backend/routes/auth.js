const express = require('express')
const User=require("../Models/User")
const bcrypt=require("bcryptjs") // required to secure password using salt and hash
const { body, validationResult } = require('express-validator');  // express validator used to validate the eamils , name , passswords entered by user
const jwt = require("jsonwebtoken")
const fetchUser=require('../middleware/fetchUser')

const JWT_Secret = process.env.JWT
const router=express.Router();


// Route 1 :  to create a user  ,  post : "/api/auth/createUser"
router.post('/createUser',[
    body('name', 'Enter a valid Name').isLength({min:3}),
    body('email','Enter a valid Email').isEmail(),
    body('password','Password must be at least 5 characters').isLength({min:5}),
],async (req,res)=>{
    let success =false;

    //  if there are error this will return it 
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return  res.status(400).json({success, errors: result.array() });
    }
    //  it checks whether the user already exits
    try {
        let usr = await User.findOne({email:req.body.email});
        if(usr)
        {
           return  res.status(400).json({success,error:"This user already exits"})
        }
        // This will secure our password from hackers
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password , salt)
        // this will store the data of name , email , password inside the mogodb
       let user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
          })
        //   .then(user => res.json(user))
        //   .catch(user=>{console.log("error occured");
        //    res.json({error: "This email id already exists!!"})})
        const data={
            user:{
                id:user.id
            }
        }
        let token = jwt.sign(data,JWT_Secret)
        success=true;
        res.json({success,token})
        console.log(token)
        
    }
    // if we type any error syntax inside the try it will catch the error here
     catch (error) {
        console.log(error.message);
        res.status(500).json({error:'Internal Server Error'})
    }
})


// Route 2 : authenticating login credentials  ,  post : "/api/auth/login"
// Authenticating user and no login is required
router.post('/login',[
            body('email','Enter a valid email').isEmail(),
            body('password','Password cannot be empty').exists()
        ],async (req,res)=>{
            const result=validationResult(req)
            let success =false;
            if(!result.isEmpty())
            {
                return res.status(500).json({error:result.array()})
            }
            const {email,password}=req.body;
            try {
                let user=await User.findOne({email})
                if(!user)
                {
                    return res.status(500).json({error:"User Wrong"})
                }
                // this will check whether the password is correct or wrong
                let passCompare=await bcrypt.compare(password,user.password)
                if(!passCompare)
                {
                    return res.status(500).json({success,error:"Password Wrong"})
                }
                const data={
                    user:{
                        id:user.id
                    }
                }
                let token=jwt.sign(data,JWT_Secret)
                success = true;
                res.json({success,token})
                console.log(token)
            } catch (error) {
                console.log(error.message);
                res.status(500).json({error:'Internal Server Error'})
            }
        })

// Route 3 : get user details    , post : "/api/auth/getUser"

router.post('/getUser',fetchUser,async (req,res)=>{
    try {
        userId=req.user.id;
        let user=await User.findById(userId).select("-password") // this will select all the user credentials except the password
        res.json(user)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error:'Internal Server Error'})
    }
})
module.exports=router;