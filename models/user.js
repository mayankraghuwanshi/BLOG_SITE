const mongoose = require('mongoose');
const date = require('../Date/date')

const userSchema = mongoose.Schema({

    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    username:{
      type:String,
      required:true,
      unique:true
    },
    facebookID:{
        type:String,
        required:false
    },
    googleID:{
        type:String,
        required:false
    },
    password:{
        type:String,
        required:true
    },

    date:{
        type:String,
        required:false,
        default:date()
    }
})
module.exports= mongoose.model('User',userSchema);