const express  = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const hbs      = require('express-handlebars');
const flash    = require('connect-flash');
const session  = require('express-session');
const axios    = require('axios')
const path     = require('path')
const SERVER_PORT = process.env.PORT || 1221
const server   = express();
server.use(express.json());
server.use(express.urlencoded({
    extend:false
}));

server.engine('hbs', hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layouts/"
}))

server.set('views' ,  __dirname + '/views')
server.set('view engine' , 'hbs')
server.use(session({
    secret:"ftaftkrlorecover"
}));
server.use(flash());
server.use(passport.initialize());
server.use(passport.session());
server.use('/static',express.static(__dirname+"/views/"));
//mongoose.connect('mongodb://localhost:27017/blog-post');
mongoose.connect('mongodb://mayankraghuvanshi:singh7272@ds125058.mlab.com:25058/blog-post');

//for assets
server.use(express.static(path.join(__dirname , 'public')))
server.use('/images',express.static(__dirname+'/images/'))
server.use('/user' , require('./Routes/user'))
server.use('/post' , require('./Routes/post'))
server.use('/' , require('./Routes/home'))


server.listen(SERVER_PORT,()=>{
    console.log('Blog Post is hosted at http://localhost:1221/show')
})