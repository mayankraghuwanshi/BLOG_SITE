const USER     = require('../models/user');
const passport = require('../Passport/passport');
const route    = require('express').Router();


route.get('/',(req , res)=>{
      console.log("trying to get data")
USER.find({}).then((data)=>{
          res.send(data)
})           .catch((err)=>{
          res.send({error:err})
})
})
route.post('/',( req , res )=>{
    const user = new USER({
        first_name : req.body.first_name,
         last_name : req.body.last_name,
          username : req.body.username,
          password : req.body.password
    });
    user.save().then((data)=>{
            res.redirect('/user')
    })         .catch((err)=>{
            res.send({error:err})
    })

})

route.post('/login',passport.authenticate('local', {

    failureRedirect : '/fail',
    successRedirect : '/home',
       failureFlash : true
}))
route.get('/logout',(req , res)=>{
    req.logout();
    res.redirect('/home')
})

module.exports = route;
