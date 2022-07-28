const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// register/sign up

exports.register = async (req, res) => {
  const { firstName, lastName, email, password, mobile, photo_url, address,voyages, réservations } = req.body;
  try {
    const newUser = new User({ firstName, lastName, email, password, mobile, photo_url, address,voyages, réservations  });
    
    // check if the email exist
    const searchedUser = await User.findOne({email});
    if (searchedUser)
      return res.status(400).send({ msg: "email already exist" });
    // hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    newUser.password = hashedPassword;
    // save the user
    const result = await newUser.save();
    // generate a token
    const payload = {
      _id: result._id,
      firstName: result.firstName,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });
    return res.status(200).send({
      user: result,
      msg: "user added succesfully",
      token: `Bearer ${token}`,
    });
  } catch (error) {
    return res.send(500).send({ msg: "can not save the user" });
  }
};

// login / sign in

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // find if the user exist
    const searchedUser = await User.findOne({ email });
    //if the email not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad Credential" });
    }
    //password are equals
    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({ msg: "bad Credential" });
    }
    // create a token
    const payload = {
      _id: searchedUser._id,
      firstName: searchedUser.firstName,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });
    // send the user
    res
      .status(200)
      .send({ user: searchedUser, msg: "success", token: `Bearer ${token}` });
  } catch (error) {
    res.send(500).send({ msg: "can not get the user" });
  }
};

exports.current = (req, res) => {
  res.status(200).send({ user: req.user });
};


exports.updateUser= async(req, res) => {
  try{
    let result=await User.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}})
   res.status(200).send({ msg:"user updated"})
  }
  catch(error){
    res.send("error")
  }
};