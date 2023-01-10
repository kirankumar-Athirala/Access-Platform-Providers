var express = require('express');
var router = express.Router();

var OfferEmployee = require('../models/Offer');
var User = require('../models/User');
var crypto    = require('crypto'), hmac, signature;

 const addoffer =  (req, res) => {
    console.log("i am in employee");
    var document = {
        offerid :  req.body.offerid,
        PositionID:  req.body.PositionID,
        employee_name : req.body.employee_name,
        provider_name : req.body.provider_name,
        contactperson : req.body.contactperson,
        externalperson : req.body.externalperson,
        rate : req.body.rate,
        notes : req.body.notes,
        dateuntil : req.body.dateuntil,
        document : req.body.document,
      };
      const id =req.session.passport.user;
      console.log(id);
      try{
        const id =req.session.passport.user;


        User.Provider_A.findById(id)
        .exec((err, data) => {
        if (data) 
        {
            console.log("i am in employee provider A");
            console.log("i am in employee provider A");
            var user = new OfferEmployee.Provider_A_offer(document); 
            user.save(function(error){
              // console.log(offer);
              if(error){ 
                throw error;
              }
              res.json({message : "Data saved successfully.", status : "success"});
           }); 
        }
    })
      }
      catch(error){
        console.log(error.message);
      }


      User.Provider_B.findById(id)
      .exec((err, data) => {
        if (data) 
        {
            var user = new OfferEmployee.Provider_B_offer(document); 
            user.save(function(error){
              // console.log(offer);
              if(error){ 
                throw error;
              }
              res.json({message : "Data saved successfully.", status : "success"});
           }); 
        }
    })

    User.Provider_C.findById(id)
    .exec((err, data) => {
        if (data) 
        {
            var user = new OfferEmployee.Provider_C_offer(document); 
            user.save(function(error){
              // console.log(offer);
              if(error){ 
                throw error;
              }
              res.json({message : "Data saved successfully.", status : "success"});
           }); 
        }
    })

    User.Provider_D.findById(id)
      .exec((err, data) => {
        if (data) 
        {
            var user = new OfferEmployee.Provider_D_offer(document); 
            user.save(function(error){
              // console.log(offer);
              if(error){ 
                throw error;
              }
              res.json({message : "Data saved successfully.", status : "success"});
           }); 
        }
    })

    
};
module.exports = {addoffer};