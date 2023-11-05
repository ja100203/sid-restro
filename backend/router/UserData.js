const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require("jsonwebtoken");
const {body,validationResult}=require("express-validator");
const jwtSecret=process.env.JWT_SECRET;


const Register=require('../models/Restaurant');


router.post("/createuser",[
    body('email','incorrect email').isEmail(),
    body('username').isLength({min:5}),
    body('password','incorrect password').isLength({min:5})],
    
    async (req, res) => {
      res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      });
      console.log("body ", req.body);
      console.log("hehe");
    const errors=validationResult(req);
    console.log("hihi");
    if(!errors.isEmpty()){
        return res.status(400).send({errors:errors.array()})
    }
    console.log("haha");
    const salt=await bcrypt.genSalt(10);
    const secPassword=await bcrypt.hash(req.body.password,salt)
    
        try{
        await Register.create({
            username: req.body.username,
            password: secPassword,
            email: req.body.email,
        }).then(res.send({success:true}));
    }catch(err){
        console.log(err);
        res.send({success:false});
    }
    });


    router.post("/loginuser", async (req, res) => {
      res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      });
        const { email, password } = req.body;
      console.log("blah blah");
        try {
          const userData = await Register.findOne({ email });
      
          if (!userData) {
            return res.status(401).json({ errors: "Invalid login credentials" });
          }
      
          // Now that you have found a user, you can proceed to check the password.
          const pwdCompare = await bcrypt.compare(password, userData.password);
      
          if (!pwdCompare) {
            return res.status(401).json({ errors: "Invalid login credentials" });
          }
      
          const data = {
            user: {
              id: userData.id
            }
          };
      
          const authToken = jwt.sign(data, jwtSecret);
          return res.json({ success: true, authToken: authToken });
        } catch (err) {
          console.error(err);
          res.status(500).json(err,{ success: false });
        }
      });
      

    module.exports=router;
    
    