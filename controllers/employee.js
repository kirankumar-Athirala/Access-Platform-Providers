var express = require('express');
var router = express.Router();
var Employee      = require('../models/Employee');
var crypto    = require('crypto'), hmac, signature;
const bcrypt = require('bcryptjs');
var collection=require('../models/Employee');

const addemployee = (req, res) => {
    var document = {
        employee_name:  req.body.employee_name,
        provider_name:  req.body.provider_name, 
        contactperson:  req.body.contactperson, 
        externalperson: req.body.externalperson, 
        rate:req.body.rate,
        dateuntil: req.body.dateuntil, 
        notes:  req.body.notes, 
        document: req.body.document,
      };
    
    var user = new Employee(document); 
    user.save(function(error){
      console.log(user);
      if(error){ 
        throw error;
      }
      res.json({message : "Data saved successfully.", status : "success"});
   }); 
};

const Getemployeedata =  (req, res) => {
  try{
    collection.find({}, function(err, data) {
      if (err)
          res.send(err)
      console.log(data);           
      res.render('employee', {
        title: 'onboardemployee','user' : data
      })
  });

  }catch(error){
    console.log(error.message);
  }
};

module.exports = {addemployee,Getemployeedata};