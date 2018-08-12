const mongoose = require('mongoose');
const date = require('../Date/date');
const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image_path:{
        type:String,
        required:false
    },
    username:{
        type:String,
        required:true
    },
    meta:{
        upvote:{
            type:Boolean,
            default:false,
               }
    },
    date:{
        type:String,
        required:false,
        default:date()

    }})

module.exports = mongoose.model('post',postSchema);


















