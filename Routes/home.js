const router      = require('express').Router();
const hbs         = require('express-handlebars');
const axios       = require('axios')

router.get('/show',(req , res)=>{
    console.log('post section')
    axios.get('http://localhost:1221/post').then((data)=>{
        console.log("Post retreaved")
        res.render('index' , data )
    }).catch((err)=>{
        console.log('error')
        res.render('index' ,data = err )
    })
})

module.exports = router;