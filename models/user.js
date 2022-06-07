const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    uname:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
    
},
    {
        timestamp:true
    }
)

const user = mongoose.model('user',userSchema);

module.exports = user;