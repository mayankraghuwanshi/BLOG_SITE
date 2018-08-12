const express  = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const hbs      = require('hbs');
const flash    = require('connect-flash');
const session  = require('express-session');
const server   = express();
server.use(express.json());
server.use(express.urlencoded({
    extend:true
}));

server.set('view engine','hbs');
server.set('views',"views");

server.use(session({
    secret:"ftaftkrlorecover"
}));
server.use(flash());
server.use(passport.initialize());
server.use(passport.session());
server.use('/static',express.static(__dirname+"/views/"));
mongoose.connect('mongodb://localhost:27017/blog');

server.get('/fail',(req , res)=>{
   res.send("fail");
})
server.get('/success',(req , res)=>{
   res.send("success");
})
server.use('/home',(req , res)=>{
    if(req.user){
       res.render('index',{data:req.user})
    }
    else {
        res.redirect('/blog/log_in.html')
    }
})
server.use(express.static(__dirname+'/Public/user/'))
server.use('/blog',express.static(__dirname+'/Public/user/'))
server.use('/user' , require('./Routes/user'))
server.use('/post' , require('./Routes/post'))


server.listen(1221,()=>{
    console.log('http://localhost:1221/check')
})