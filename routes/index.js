var express = require("express");
var router = express.Router();
const User = require('../models/User')

/* GET home page. */
router.get("/", async (req, res, next) => {
  try {
    // const insert = req.query 
    const users = await User.find()
    console.log('request : ', users)
    res.json(users)
    // const newUser = new User()
    // newUser.email = 'mothcar@naver.com'
    // newUser.name = 'mothcar'
    // newUser.age = 49
    // newUser.save()
    // .then((user)=>{
    //   console.log('data : ', user)
    //   // res.json({
    //   //   message: 'User created'
    //   // })
    //   // res.render("index", { title: user });
      
    // }).catch((err)=>{
    //   res.json({
    //     message:'Not created...'
    //   })
    // })
  } catch(err) {
    res.status(500).json({message: err.message})

  }
  
  console.log("test...............");
  // console.log("test...............11");
  // console.log("data : ", data);
  // res.render("index", { title: "Express11" });
});

module.exports = router;
