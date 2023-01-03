const fetch = require('node-fetch')
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

//var User      = mongoose.model('Users');
var User = require('../models/User');


var usercontroller = require('../controllers/index');
var employeecontroller = require('../controllers/employee');

const { check, validationResult } = require('express-validator/check');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page

router.get('/register', forwardAuthenticated, (req, res) =>  res.render('index', { title: 'Registartion'}));

router.get('/Masteragreement', ensureAuthenticated, function(req, res,next){
res.render('Masteragreement', {
  title: 'Masteragreements'
})
});

router.get('/AddEmployee', ensureAuthenticated, function(req, res,next){
  res.render('addemployee', {
    title: 'AddEmployee'
  })
  });

router.get('/Updateprofile', ensureAuthenticated, function(req, res,next){

  usercontroller.GetUserData(req,res);
  //const id =req.session.passport.user;
 
});




router.get('/Openservices',ensureAuthenticated, (req, res) => {
  async function getPosts(){
   const posts = await fetch("https://provider-management-platform-server.onrender.com/agreementsDetails");
   const data = await posts.json()
   res.render('openservice',{
   title:"Openservices",
   details: data
 })
  }
  getPosts()
 
})


// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    req.flash('success_msg', 'You are logged out');
    res.redirect('/');
  });
});


router.post('/register',[ 
  
  check('firstname')
  .isLength({ min: 1 })
  .withMessage("First name cannot be left blank")
  .isAlpha()
  .withMessage("First Nmae should only contains Alphabets"),

  check('lastname')
  .isLength({ min: 1 })
  .withMessage("last name cannot be left blank")
  .isAlpha()
  .withMessage("last Nmae should only contains Alphabets"),

  check('mobile')
  .matches(/^\+?[0-9]+[0-9\-]+[0-9]$/)
  .withMessage("please enter a valid mobile number"),

  check('email')
  .isEmail().withMessage('Please enter a valid email address')
  .trim()
  .normalizeEmail()
  .custom(value => {

   
      return findUserByEmail(value).then(User => {
        //if user email already exists throw an error
    })
  }),

  check('password')
  .isLength({ min: 5 }).withMessage('Password must be at least 5 chars long')
  .matches(/\d/).withMessage('Password must contain one number')
  .custom((value,{req, loc, path}) => {
    if (value !== req.body.cpassword) {
        // throw error if passwords do not match
        throw new Error("Passwords don't match");
    } else {
        return value;
    }
}),

check('username','username cannot be left blank')
  .isLength({ min: 1 }),

  //check('provider','Provider cannot be left blank')
  //.isLength({ min: 1 }),
  
  check('terms','Please accept our terms and conditions').equals('yes'),

 ], function(req, res, next) {

    const errors = validationResult(req);

  if (!errors.isEmpty()) {     
      
     res.json({status : "error", message : errors.array()});

  } else {
    console.log("i am before controller");
    usercontroller.AddUser(req, res);

  
  }
});

router.post('/edit',[ 
  
  check('firstname')
  .isLength({ min: 1 })
  .withMessage("First name cannot be left blank")
  .isAlpha()
  .withMessage("First Nmae should only contains Alphabets"),

  check('lastname')
  .isLength({ min: 1 })
  .withMessage("last name cannot be left blank")
  .isAlpha()
  .withMessage("last Nmae should only contains Alphabets"),

  check('mobile')
  .matches(/^\+?[0-9]+[0-9\-]+[0-9]$/)
  .withMessage("please enter a valid mobile number"),

  check('email')
  .isEmail().withMessage('Please enter a valid email address')
  .trim()
  .normalizeEmail(),

  check('password')
  .isLength({ min: 5 }).withMessage('Password must be at least 5 chars long')
  .matches(/\d/).withMessage('Password must contain one number')
  .custom((value,{req, loc, path}) => {
    if (value !== req.body.cpassword) {
        // throw error if passwords do not match
        throw new Error("Passwords don't match");
    } else {
        return value;
    }
}),

check('username','username cannot be left blank')
  .isLength({ min: 1 }),

 ], function(req, res, next) {

    const errors = validationResult(req);

  if (!errors.isEmpty()) {     
      
     res.json({status : "error", message : errors.array()});

  } else {
    usercontroller.UpdateUser(req, res);

  
  }
});


router.post('/addemployee',[ 
  check('employee_name','Please  provide Employee Name')
  .isLength({ min: 1 }),
  check('provider_name','Please  provide provider person')
  .isLength({ min: 1 }),
  check('contactperson','Please  provide contact person')
  .isLength({ min: 1 }),
  check('externalperson','Please provide external person')
  .isLength({ min: 1 }),
  check('rate','Please provide rate')
  .isLength({ min: 1 }),
  check('notes','Please provide notes')
  .isLength({ min: 1 }),  
  check('dateuntil','Please provide date')
  .isLength({ min: 1 }),
   
 ], function(req, res, next) {

    const errors = validationResult(req);

  if (!errors.isEmpty()) {     
      
     res.json({status : "error", message : errors.array()});

  } else {
    console.log("i am in employee route");
    employeecontroller.addemployee(req, res); 
  }
});



router.post('/update',[ 
   
  check('firstname')
  .isLength({ min: 1 })
  .withMessage("First name cannot be left blank")
  .isAlpha()
  .withMessage("First Nmae should only contains Alphabets"),

  check('lastname')
  .isLength({ min: 1 })
  .withMessage("last name cannot be left blank")
  .isAlpha()
  .withMessage("last Nmae should only contains Alphabets"),

  check('mobile')
  .matches(/^\+?[0-9]+[0-9\-]+[0-9]$/)
  .withMessage("please enter a valid mobile number"),

  check('email')
  .isEmail().withMessage('Please enter a valid email address')
  .trim()
  .normalizeEmail()
  .custom(value => {

      return findUserByEmail(value).then(user => {
        //if user email already exists throw an error
    })
  }),

  check('password')
  .isLength({ min: 5 }).withMessage('Password must be at least 5 chars long')
  .matches(/\d/).withMessage('Password must contain one number')
  .custom((value,{req, loc, path}) => {
    if (value !== req.body.cpassword) {
        // throw error if passwords do not match
        throw new Error("Passwords don't match");
    } else {
        return value;
    }
}),

check('username','username cannot be left blank')
  .isLength({ min: 1 }),

  check('provider','Provider cannot be left blank')
  .isLength({ min: 1 }),
  
  check('terms','Please accept our terms and conditions').equals('yes'),

 ], function(req, res, next) {

    const errors = validationResult(req);

  if (!errors.isEmpty()) {     
      
     res.json({status : "error", message : errors.array()});

  } else {
    //usercontroller.FindUserByID(req, res);

  
  }
});

function findUserByEmail(email){
  
if(email){
    return new Promise((resolve, reject) => {
      var finduser = true;

      if (finduser)
      {
        User.Provider_A.findOne({ email: email })
          .exec((err, doc) => {
            if (err) return reject(err)
            if (doc) return reject(new Error('This email already exists. Please enter another email.'))
            else return resolve(email)
        })
      }
       if (finduser)
      {
        User.Provider_B.findOne({ email: email })
          .exec((err, doc) => {
            if (err) return reject(err)
            if (doc) return reject(new Error('This email already exists. Please enter another email.'))
            else return resolve(email)
        })
      }
       if (finduser)
      {
        User.Provider_C.findOne({ email: email })
          .exec((err, doc) => {
            if (err) return reject(err)
            if (doc) return reject(new Error('This email already exists. Please enter another email.'))
            else return resolve(email)
        })
      }
       if (finduser)
      {
        User.Provider_D.findOne({ email: email })
          .exec((err, doc) => {
            if (err) return reject(err)
            if (doc) return reject(new Error('This email already exists. Please enter another email.'))
            else return resolve(email)
        })
      }
      else 
      {
        return resolve(email)
      }

    })
  }
}





module.exports = router;