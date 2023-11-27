const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


const userSchema = mongoose.Schema({
userName: {
    type: String,
    maxlength: 50
},
easyPassword: {
    type : String,
    minlength: 5
},
role: {
    type: Number,
    default: 0
},
token:{
    type:String
}


})

userSchema.methods.comparePassword = function (plainPassword, cb) {
    
    //plainPassword 1234567    암호회된 비밀번호 $2b$10$l492vQ0M4s9YUBfwYkkaZOgWHExahjWC
    bcrypt.compare(plainPassword, this.easyPassword, function (err, isMatch) {
        if (err) return console.log(err)
        cb(null, isMatch);
    })
}

userSchema.methods.generateToken = function (cb) {
    var user = this
    var token = jwt.sign(user._id.toHexString(),'secertToken')

    user.token = token
    user.save(function(err,user) {
        if(err) return cb(err)
        cb(null,user)
    })
}




const User = mongoose.model('User2', userSchema)

module.exports = {User}