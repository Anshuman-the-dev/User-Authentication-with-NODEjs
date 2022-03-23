// Routing Method (GET/POST)
// will be defined here
// These methods will perform accepting data from template & processing them 
// within MongoDB

const express = require('express');
const router = express.Router();

const User = require('../model/user');

let user = null;


router.get('/', (req, res) => {
   res.locals.user = null;
   res.render('index');
});

router.post('/signup',(req, res)=>{
   let newUser = {
   email:req.body.email,
   password:req.body.password

   };

   User.findOne({email: req.body.email})
     .then(existEmp => {
        if(existEmp == null){
           
                
              User.create(newUser)
             .then(() => {                           //chain of function
               return res.send({
                msg: 'User Registered Successfully'
            })
            }) 

        } else {
            return res.send({
                msg: 'User already Registrated'
            })
        }
     })

   


});

router.get('/login', (req, res) => {
   res.locals.user = null;
   res.render('login');
});

router.post('/login',async (req, res)=>{
   let newUser = {
   email:req.body.email,
   password:req.body.password
   
   };
    
   // console.log(newUser);

    user = await User.findOne(newUser);
   // console.log(user);

   if(!user) {
       return res.send({
           error: 'User not login'
       })
   } else{
       return res.send({
           msg: 'User login'
       })
   }
});


router.get('/dashboard', (req, res) => {
   res.locals.user = user;
   res.render('dashboard');
});


     

router.get('/logout', (req, res) => {
   res.locals.user = user;
    res.redirect('/');
});



module.exports = router;