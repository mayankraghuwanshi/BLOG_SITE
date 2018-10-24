const express  = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const hbs      = require('hbs');
const flash    = require('connect-flash');
const session  = require('express-session');
const SERVER_PORT = process.env.PORT || 1221
const server   = express();
server.use(express.json());
server.use(express.urlencoded({
    extend:false
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
mongoose.connect('mongodb://mayankraghuvanshi:singh7272@ds125058.mlab.com:25058/blog-post');

server.use('/home',(req , res)=>{
    if(req.user){
       res.render('index',{data:req.user})
    }
    else {
        res.redirect('/index.html')
    }
})
server.use('/images',express.static(__dirname+'/images/'))
server.use(express.static(__dirname+'/Public/'))
server.use('/',express.static(__dirname+'/Public/'))
server.use('/user' , require('./Routes/user'))
server.use('/post' , require('./Routes/post'))


server.listen(SERVER_PORT,()=>{
    console.log('Blog Post is hosted at http://localhost:1221/home')
})