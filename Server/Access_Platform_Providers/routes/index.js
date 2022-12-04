var express   = require('express');
var router    = express.Router();
var mongoose  = require('mongoose');
var User      = mongoose.model('Users');


var usercontroller = require('../controllers/index');

const { check, validationResult } = require('express-validator/check');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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

  check('provider','Provider cannot be left blank')
  .isLength({ min: 1 }),
  
  check('terms','Please accept our terms and conditions').equals('yes'),

 ], function(req, res, next) {

    const errors = validationResult(req);

  if (!errors.isEmpty()) {     
      
     res.json({status : "error", message : errors.array()});

  } else {
    usercontroller.AddUser(req, res);

  
  }
});

function findUserByEmail(email){

if(email){
    return new Promise((resolve, reject) => {
      User.findOne({ email: email })
        .exec((err, doc) => {
          if (err) return reject(err)
          if (doc) return reject(new Error('This email already exists. Please enter another email.'))
          else return resolve(email)
        })
    })
  }
}

module.exports = router;
