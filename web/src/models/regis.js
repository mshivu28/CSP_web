const mongoose = require("mongoose");
const CustomerReview = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    phone:{
        require:true,
        type:Number,
        unique:true,
    },
    gender:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        requirer:true,
    },
    consfirmpassword:{
        type:String,
        require:true,
    }

})


module.exports = new mongoose.model("CustomerData",CustomerReview)