const router      = require('express').Router();
const POST        = require('../models/post');
const multer      = require('multer');
const cloudinary = require('cloudinary')
const storage     = multer.diskStorage({
    destination:function(req , file , done){
        done(null , 'images');
    },
    filename : function (req , file , done) {
                done(null , file.originalname);}})


const fileFilter = function(req , file , done){
    if(file.mimetype === "image/jpeg" || file.mimetype==="image/png"){
        done(null,true);
    }
    else { done(new Error("file is not jpeg or png") ,false);
    }
}

const upload = multer({
    storage:storage,
    fileFilter:fileFilter
  })

//just for testing
router.post('/image',upload.single('image'),async (req , res)=>{
const result = await cloudinary.v2.uploader.upload("req.file.path")
    res.send(result)
})


//fetch all posts
router.get('/',(req , res)=>{
 POST.find({}).then((data)=>{
           res.send(data)
 })           .catch((err)=>{
           res.send({error:err})
 })
 })

router.get('/create' , (req , res)=>{
    res.render('postc')
})

//create new posts
router.post('/create',upload.single('image'),(req , res)=>{
    const post = new POST({
          title : req.body.title,
        content : req.body.content,
       username : req.user.username,
     image_path : req.file.path
    });
    post.save().then((data)=>{
            res.redirect('/')
    }).catch((err)=>{
            res.send({error:err})
    })

})
router.get('/delete:id' , async (req , res)=>{

    if(req.user){
        let post = await POST.findOne({_id : req.params.id})
        if(post.username === req.user.username ){
            POST.remove({_id : req.params.id}).then((data)=>{
                req.flash('success' , "Post is deleted.")
                res.redirect('/')
            })           .catch((err)=>{
                res.render('post', err )
            })
        }
    else{
            req.flash('fail' , "You can't delete this post..")
            res.redirect('/')
        }
    }
    else{
        req.flash('fail' , "Please Log In first.")
        res.redirect('/')
    }

})


router.get('/find:id' , (req , res)=>{
    POST.findOne({_id : req.params.id}).then((data)=>{
        res.render('post' , {data : data})
    })           .catch((err)=>{
        res.render('post', err )
    })
})


module.exports = router;