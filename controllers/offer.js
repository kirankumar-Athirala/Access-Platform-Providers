var express = require('express');
var router = express.Router();

var OfferEmployee = require('../models/Offer');
var Employee = require('../models/Employee');
var User = require('../models/User');
var crypto    = require('crypto'), hmac, signature;

 const addoffer =  (req, res) => {
    console.log("i am in employee");
    var document = {
      employeeid :  req.body.employeeid,
      positionid:  req.body.positionid,
      agreementsid : req.body.agreementsid,
      employee_name : req.body.employee_name,
      provider_name : req.body.provider_name,
      contactperson : req.body.contactperson,
      externalperson : req.body.externalperson,
      rate : req.body.rate,
      notes : req.body.notes,
      dateuntil : req.body.dateuntil,
      document : req.body.document,
      status:"Offered",
      };

      var document_employee = {

        status:"Offered",
        };
      const id =req.session.passport.user;
      console.log(id);
      try{
        const id =req.session.passport.user;


        User.Provider_A.findById(id)
        .exec((err, data) => {
        if (data) 
        {
            Employee.Provider_A_employee.findOneAndUpdate({"employee_name":req.body.employee_name}, 
            {
               $set : document_employee
            },
            {new: true},
            (err, user) => {
              if (err) throw err;
                 // Some handle 
               }
            );

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
            Employee.Provider_B_employee.findOneAndUpdate({"employee_name":req.body.employee_name}, 
            {
               $set : document_employee
            },
            {new: true},
            (err, user) => {
              if (err) throw err;
                 // Some handle 
               }
            );

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
            Employee.Provider_C_employee.findOneAndUpdate({"employee_name":req.body.employee_name}, 
            {
               $set : document_employee
            },
            {new: true},
            (err, user) => {
              if (err) throw err;
                 // Some handle 
               }
            );
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
            Employee.Provider_D_employee.findOneAndUpdate({"employee_name":req.body.employee_name}, 
            {
               $set : document_employee
            },
            {new: true},
            (err, user) => {
              if (err) throw err;
                 // Some handle 
               }
            );
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

const getroffers=  (req, res) => {

    var querydata =req.query;
    if (querydata.provider == "A")

    {
        OfferEmployee.Provider_A_offer.find()
        .exec((err, data) => {
        if (data) 
        {
          res.send(data);
        }
        else
        {
            res.json({message : "No Offers currently", status : "failure"});

        }
        })
    }
    else if (querydata.provider == "B")

    {
        OfferEmployee.Provider_B_offer.find()
            .exec((err, data) => {
            if (data) 
            {
              res.send(data);
            }
            else
            {
                res.json({message : "No Offers currently", status : "failure"});

            }
            })
    }
    else if (querydata.provider == "C")

    {
        OfferEmployee.Provider_C_offer.find()
            .exec((err, data) => {
            if (data) 
            {
              res.send(data);
            }
            else
            {
                res.json({message : "No Offers currently", status : "failure"});

            }
            })
    }
    else if (querydata.provider == "D")

    {
        OfferEmployee.Provider_D_offer.find()
            .exec((err, data) => {
            if (data) 
            {
              res.send(data);
            }
            else
            {
                res.json({message : "No Offers currently", status : "failure"});

            }
            })
    }

};
module.exports = {addoffer,getroffers};