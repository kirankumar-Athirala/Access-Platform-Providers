const fetch = require('node-fetch')
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

//var User      = mongoose.model('Users');
var User = require('../models/User');


var usercontroller = require('../controllers/index');
var employeecontroller = require('../controllers/employee');
var agreementcontroller = require('../controllers/agreements');
var offercontroller = require('../controllers/offer');
const { check, validationResult } = require('express-validator/check');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page

router.get('/register', forwardAuthenticated, (req, res) =>  res.render('index', { title: 'Registartion'}));

router.get('/Masteragreement', ensureAuthenticated, function(req, res,){

  // async function getagreements(){
  //   const posts = await fetch("https://provider-management-platform-server.onrender.com/agreementsDetails");
  //   const data = await posts.json()
  //   res.render('Masteragreement',{
  //   title:"Masteragreements",
  //   details: data
  // })
  //  }
  //  getagreements()
  data = [
    {
    "offerid": "63836197a3f23cddb9e961fd",
    "name": "Web Application development",
    "type": "Team",
    "dailyrateindication": "100",
    "status": "Published",
    "cycle": "1",
    "startTime": "2019-04-05",
    "endTime": "2015-12-01",
    "location": "Frankfurt"
    ,

  },
  {
    "offerid": "63836197a3f23cddb9e961fy",
    "name": "Game development",
    "type": "Team",
    "status": "Published",
    "dailyrateindication": "450",
    "cycle": "1",
    "startTime": "2019-04-05",
    "endTime": "2015-12-01",
    "location": "Frankfurt"
    ,

  },

  {
    "offerid": "63836197a3f23cddb9e961fz",
    "name": " AI development",
    "type": "Team",
    "status": "Published",
    "dailyrateindication": "950",
    "cycle": "1",
    "startTime": "2019-04-05",
    "endTime": "2015-12-01",
    "location": "Muncih"
    ,

  }]




  // if (agreementcounter==1)
  // { 
  //   console.log("count:",agreementcounter)
  //   agreementcontroller.saveagreements(data,req,res);
  //   agreementcontroller.getagreement(req,res);
  //   agreementcounter++;}
  // else{
  //   console.log("count:",agreementcounter)
  //   agreementcontroller.getagreement(req,res);
  // }

  agreementcontroller.saveagreements(data,req,res);

  
  agreementcontroller.getagreement(req,res);
  //agreementcontroller.getagreement(req,res);
});

router.get('/Masteragreementbidding', ensureAuthenticated, function(req, res,next){

  data = [
    {
      "PositionName":"Backend Developer",
      "agreementsId": "63836197a3f23cddb9e961fd",
      "level":1,
      "Onsite":"950",
      "remote":"900",
      "OnsitePercentage":"100%",
      "validateFrom":"2015-12-01",
      "validateUntil": "2019-04-05"
  
    },
    {
      "PositionName":"Frontend Developer",
      "agreementsId": "63836197a3f23cddb9e961fd",
      "level":2,
      "Onsite":"1000",
      "remote":"1100",
      "OnsitePercentage":"80%",
      "validateFrom":"2015-12-01",
      "validateUntil": "2019-04-05"
  
    }
  ]

  agreementcontroller.biddingdata(data,req,res);
  agreementcontroller.getagreementbids(req,res);

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


router.get('/offerEmployee', ensureAuthenticated, function(req, res,next){
  // const data = JSON.stringify(req.query)
  // console.log(data)
  employeecontroller.GetEmployeeData(req,res);
  // res.render('offerEmployee', {
  //   title: 'offerEmployee',
  //   data : req.query.id
  // })
  });

  router.get('/Employeestatus', ensureAuthenticated, function(req, res,next){
    // const data = JSON.stringify(req.query)
    // console.log(data)
    employeecontroller.GetEmployeeData(req,res);
    // res.render('offerEmployee', {
    //   title: 'offerEmployee',
    //   data : req.query.id
    // })
    });
router.get('/submitoffer', ensureAuthenticated, function(req, res,next){
     res.render('submitoffer', {
      title: 'submitoffer',
      "offerEmployeeDetails":req.query
    })
    });

router.get('/agreementdetails', ensureAuthenticated, function(req, res,next){
     res.render('agreementdetails', {
      title: 'Agreement Details',
      "AgreementDetails":req.query
    })
    });
router.get('/biddingdetails', ensureAuthenticated, function(req, res,next){
     res.render('biddingdetails', {
      title: 'Bidding Details',
      "BiddingDetails":req.query
    })
    });


router.get('/Agreementbids', function(req, res,next){
  agreementcontroller.getagreementbidsforoffer(req,res);
    });

router.get('/offers', function(req, res,next){
  offercontroller.getroffers(req,res);
    });


router.get('/Openservices',ensureAuthenticated, (req, res) => {
//   async function getPosts(){
//    const posts = await fetch("https://provider-management-platform-server.onrender.com/agreementsDetails");
//    const data = await posts.json()
//    res.render('openservice',{
//    title:"Openservices",
//    details: data
//  })
//   }
//   getPosts()

data = [
  {
    "_id":1,
    "PositionName":"Backend Developer",
    "agreementsId": "63836197a3f23cddb9e961fd",
    "Onsite":"950",
    "remote":"900",
    "Onsite Percentage":"100%",
    "validateFrom":"2015-12-01",
    "validateUntil": "2019-04-05"

  },
  {
    "_id":2,
    "PositionName":"Frontend Developer",
    "agreementsId": "63836197a3f23cddb9e961fd",
    "Onsite":"1000",
    "remote":"1100",
    "Onsite Percentage":"80%",
    "validateFrom":"2015-12-01",
    "validateUntil": "2019-04-05"

  }]
  res.render('openservice',{
        title:"Openservices",
        details: data
      });
 
})
router.get('/offerEmployee', ensureAuthenticated, function(req, res,next){
  // const data = JSON.stringify(req.query)
  // console.log(data)
  employeecontroller.GetEmployeeData(req,res);
  // res.render('offerEmployee', {
  //   title: 'offerEmployee',
  //   data : req.query.id
  // })
  });

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
  agreementcounter=1;
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

check('username')
.isLength({ min: 1 })
.withMessage("username cannot be left blank")
.custom(value => {

    console.log("testing for username-1");
 
    return findUserByUsername(value).then(User => {
      //if user email already exists throw an error
  })
}),

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

router.post('/addoffer', [ 
  check('employeeid','Please  provide employeeid')
  .isLength({ min: 1 }),
  check('positionid','Please  provide positionid')
  .isLength({ min: 1 }),
  check('agreementsid','Please  provide agreementsid')
  .isLength({ min: 1 }),
  check('employee_name','Please provide employee_name')
  .isLength({ min: 1 }),
  check('provider_name','Please provide provider_name')
  .isLength({ min: 1 }),
  check('contactperson','Please contactperson')
  .isLength({ min: 1 }),
  check('externalperson','Please provide externalperson')
  .isLength({ min: 1 }),
  check('rate','Please rate')
  .isLength({ min: 1 }),
  check('notes','Please provide notes')
  .isLength({ min: 1 }),
  check('dateuntil','Please provide dateuntil')
  .isLength({ min: 1 }),
  check('document','Please provide document')
  .isLength({ min: 1 })
   
 ], function(req, res, next) {

    const errors = validationResult(req);

  if (!errors.isEmpty()) {     
      
     res.json({status : "error", message : errors.array()});

  } else {
    console.log("i am in employee route");
    offercontroller.addoffer(req, res); 
  }
 
});

router.post('/acceptagreement', [ 
  check('offerid','Please  provide Employee offerid')
  .isLength({ min: 1 }),
  check('name','Please  provide Agreement Name')
  .isLength({ min: 1 }),
  check('type','Please  provide Agreement type')
  .isLength({ min: 1 }),
  check('status','Please provide Agreement status')
  .isLength({ min: 1 }),
  check('dailyrateindication','Please provide dailyrateindication')
  .isLength({ min: 1 }),
  check('cycle','Please provide Agreement Cycle')
  .isLength({ min: 1 }),
  check('startTime','Please provide Agreement start time ')
  .isLength({ min: 1 }),
  check('endTime','Please provide Agreement end time')
  .isLength({ min: 1 }),
  check('location','Please provide location')
  .isLength({ min: 1 }),
  check('agreementstatus','Please provide agreementstatus')
  .isLength({ min: 1 })
   
 ], function(req, res, next) {

    const errors = validationResult(req);

  if (!errors.isEmpty()) {     
      
     res.json({status : "error", message : errors.array()});

  } 
  else {
    console.log("i am in employee route");
    agreementcontroller.updateagreement(req, res); 
  }
 
});

router.post('/bidagreement', [ 
  check('positionname','Please  provide position name')
  .isLength({ min: 1 }),
  check('agreementid','Please  provide agreementid')
  .isLength({ min: 1 }),
  check('level','Please  provide level')
  .isLength({ min: 1 }),
  check('onsite','Please provide onsite pay')
  .isLength({ min: 1 }),
  check('remote','Please provide remote pay')
  .isLength({ min: 1 }),
  check('onsiteper','Please provide onsite percentage')
  .isLength({ min: 1 }),
  check('validfrom','Please provide validfrom ')
  .isLength({ min: 1 }),
  check('vailduntil','Please provide vailduntil')
  .isLength({ min: 1 }),
  check('biddingstatus','Please provide biddingstatus')
  .isLength({ min: 1 }),
   
 ], function(req, res, next) {

    const errors = validationResult(req);

  if (!errors.isEmpty()) {     
      
     res.json({status : "error", message : errors.array()});

  } 
  else {
    console.log("i am in employee route");
    agreementcontroller.updatebid(req, res); 
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

function findUserByUsername(username){
  console.log("testing for username-2");
  console.log(username);
  
  if(username){
      return new Promise((resolve, reject) => {
        var finduser = true;
  
        if (finduser)
        {
          
          User.Provider_A.findOne({ username: username })
            .exec((err, doc) => {
              console.log("testing for username-A");
              //console.log(doc.username);
              if (err) return reject(err)
              if (doc) return reject(new Error('This username already exists. Please enter another username.'))
              else return resolve(username)
          })
        }
         if (finduser)
        {
          User.Provider_B.findOne({ username: username })
            .exec((err, doc) => {
              if (err) return reject(err)
              if (doc) return reject(new Error('This username already exists. Please enter another username.'))
              else return resolve(username)
          })
        }
         if (finduser)
        {
          User.Provider_C.findOne({ username: username })
            .exec((err, doc) => {
              if (err) return reject(err)
              if (doc) return reject(new Error('This username already exists. Please enter another username.'))
              else return resolve(username)
          })
        }
         if (finduser)
        {
          User.Provider_D.findOne({ username: username })
            .exec((err, doc) => {
              if (err) return reject(err)
              if (doc) return reject(new Error('This username already exists. Please enter another username.'))
              else return resolve(username)
          })
        }
        else 
        {
          return resolve(username)
        }
  
      })
    }
  }




module.exports = router;