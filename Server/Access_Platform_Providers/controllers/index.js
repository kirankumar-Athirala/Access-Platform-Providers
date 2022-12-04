var express = require('express');
var router = express.Router();
var mongoose  = require('mongoose');
var User      = mongoose.model('Users');
var crypto    = require('crypto'), hmac, signature;

const AddUser = (req, res) => {
    hmac = crypto.createHmac("sha1", 'auth secret');
    var encpassword = '';

    if(req.body.password){
      hmac.update(req.body.password);
      encpassword = hmac.digest("hex");
    }
    var document = {
        firstname:   req.body.firstname, 
        lastname:   req.body.lastname, 
        mobile:   req.body.mobile, 
        email:       req.body.email, 
        username:   req.body.username, 
        password:    encpassword, 
        provider:      req.body.gender,
      };
    
    var user = new User(document); 
    user.save(function(error){
      console.log(user);
      if(error){ 
        throw error;
      }
      res.json({message : "Data saved successfully.", status : "success"});
   });  
};

module.exports = {AddUser};