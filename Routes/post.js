const route = require('express').Router();
const POST = require('../models/post');



route.get('/',(req , res)=>{
 POST.find({}).then((data)=>{
           res.send(data)
 })           .catch((err)=>{
           res.send({error:err})
 })
 })

route.post('/',(req , res)=>{
    const post = new POST({
          title : req.body.title,
        content : req.body.content,
       username : req.body.username,
    });
    post.save().then((data)=>{
            res.redirect('/post')
    })         .catch((err)=>{
            res.send({error:err})
    })
})



module.exports = route;