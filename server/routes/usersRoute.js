const express = require("express");
const router = express.Router();

const User = require("../models/users");

router.post("/register", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }
  
 
  );

   try{
      const user = await newUser.save()
      res.send("user registered successfully");
  }catch(err) {
      return res.status(400).json({err});
  }

});
  
  router.post("/login", async (req,res) => {
      
    const {email,password} = req.body
      try{
      const user = await User.findOne({email:email,password:password})
      if(user){
           res.send(user);
      }
      else{
          return res.status(404).json({message:"login failed"})
      }
     
      }catch (err){
          return res.status(400).json({err});
      }
  })





module.exports = router;