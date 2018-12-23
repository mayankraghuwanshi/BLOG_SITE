const router      = require('express').Router();
const hbs         = require('express-handlebars');
const axios       = require('axios')

router.get('/show',(req , res)=>{
    //https://mayankblog.herokuapp.com/post
    axios.get('http://localhost:1221/post').then((data)=>{
        res.render('posts' , data )
    }).catch((err)=>{
        console.log('error')
        res.render('posts' ,data = err )
    })
})

router.get('/',(req , res)=>{
    //https://mayankblog.herokuapp.com/post
    axios.get('http://localhost:1221/post').then((data)=>{
        res.render('home' , data ,)
    }).catch((err)=>{
        console.log('err')
        res.render('home' ,data = err )
    })
})
module.exports = router;