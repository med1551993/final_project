const express = require('express')
const userRouter = express.Router();
const controllers = require("../controllers/user");
const User = require("../models/userModel");
const {
  loginRules,
  registerRules,
  validation,
  
} = require("../middleware/validator");
const isAuth = require("../middleware/passport");

// // for testing  
// userRouter.get("/", (req,res)=>{
// res.send("hello world")
//  }); 

// register/sign up

userRouter.post("/register", registerRules(), validation, controllers.register);

// // login / sign in

userRouter.post("/login", loginRules(), validation, controllers.login);

// // get current user
userRouter.get("/current", isAuth(), controllers.current);

// // update user
userRouter.put('/:id',controllers.updateUser)

module.exports = userRouter;
