const USER         = require('../models/user');
const passport     = require('../Passport/passport');
const router       = require('express').Router();

//get all users
router.get('/show',(req , res)=>{
      console.log("trying to get data")
USER.find({}).then((data)=>{
          res.send(data)
})           .catch((err)=>{
          res.send({error:err})
})
})
//create new user
router.get('/create' , (req , res)=>{
    res.render('userc')

})
router.post('/create',(req , res)=>{
    const user = new USER({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        username : req.body.username,
        password : req.body.password
    });
    user.save().then((data)=>{
        res.redirect('/home')
    })         .catch((err)=>{
        res.send({error:err})
    })


})
router.get('/login' , (req , res)=>{
    res.render('userl')
})

//Log in validation
router.post('/login',passport.authenticate('local', {

    failureRedirect : '/fail',
    successRedirect : '/home',
       failureFlash : true
}))
//Log out
router.get('/logout',(req , res)=>{
    req.logout();
    res.redirect('/home')
})

module.exports = router;
