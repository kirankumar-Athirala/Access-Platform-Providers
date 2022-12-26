var express = require('express');
var router = express.Router();
var User = require('../models/User');
//var crypto    = require('crypto'), hmac, signature;
const bcrypt = require('bcryptjs');


const AddUser = (req, res) => {

  bcrypt.genSalt(10, (err, salt) => {
     bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) throw err;
      encpassword = hash;
    });
  });

  var document = {
      firstname:   req.body.firstname, 
      lastname:   req.body.lastname, 
      mobile:   req.body.mobile, 
      email:       req.body.email, 
      username:   req.body.username, 
      password:    encpassword, 
      provider:      req.body.provider,
    };
  
  var user = new User(document); 
   user.save(function(error){
    console.log(user);
    if(error){ 
      throw error;
    }
    // To do redirection once page registration is complete.
    req.flash(
      'success_msg',
      'You are now registered and can log in'
    );
    //res.redirect('/users/login')
    res.json({message : "Data saved successfully.", status : "success"});
 });  
};

const UpdateUser = (req, res) => {

  bcrypt.genSalt(10, (err, salt) => {
     bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) throw err;
      encpassword = hash;
    });
  });

  var document = {
      firstname:   req.body.firstname, 
      lastname:   req.body.lastname, 
      mobile:   req.body.mobile, 
      email:       req.body.email, 
      username:   req.body.username, 
      password:    encpassword, 
    };
    User.findByIdAndUpdate(req.session.passport.user, 
      {
         $set : document
      },
      (err, user) => {
        if (err) throw err;
           // Some handle 
        res.json({message : "Data saved successfully.", status : "success"});
         }
      );
};


const GetUserData =  (req, res) => {
  try{

    const id =req.session.passport.user;

    User.findById(id, function(err, data) {
      if (err)
          res.send(err)
      console.log(data.firstname);
      console.log(data.mobile);
      //res.json(data);
      res.render('edit', {
        title: 'UpdateProfile','user' : data
      })
  });

  }catch(error){
    console.log(error.message);
  }
};


module.exports = {AddUser,GetUserData,UpdateUser};