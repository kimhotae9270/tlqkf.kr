const express = require('express');
const router = express.Router();
const { User } = require("../models/User");
const cookieParser = require('cookie-parser');
const app = express()
app.use(cookieParser());


router.post("/login", (req, res) => {
    User.findOne({userName:req.body.userName}, (err,user) => {
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch){
            return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." ,err })
            }
       
        user.generateToken((err,user)=> {
            if(err) return console.log(err)
            res.cookie("x_auth",user.token)
                .status(200)
                .json({loginSuccess:true,userId:user._id})
        }) 
        
    });
    
    })

    

})




module.exports = router;