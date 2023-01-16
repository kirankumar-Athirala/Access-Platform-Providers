var express = require('express');
var router = express.Router();

var Agreements = require('../models/Agreements');
var Agreement_Openservice_request = require('../models/Openservicerequest');
var User = require('../models/User');
var crypto    = require('crypto'), hmac, signature;



const openservicedata =  (agrements,req,res) => {
   
    const id =req.session.passport.user;
    try{
      const id =req.session.passport.user;


      User.Provider_A.findById(id)
      .exec((err, data) => {
      if (data) 
      {

          agrements.forEach(function (agreement) {   
              var document = {
                  positionid :  agreement._id,
                  positionname :  agreement.name,
                  agreementid:  agreement.agreementsId,
                  type:agreement.type,
                  biddingstatus: "pending"
                };

                Agreements.Provider_A_Agreements.findOne({"offerid":agreement.agreementsId,"agreementstatus": "Accepted"})
                .exec((err, data) => {
                if (data )
                {
                    Agreement_Openservice_request.Provider_A_Openservice_Requests.findOne({"positionid":agreement._id})
                    .exec((err, data) => {
                    if (!data || data.length==0)
                    {
                      var user = new Agreement_Openservice_request.Provider_A_Openservice_Requests(document); 
                      console.log("saving user in A");
                      console.log(user);
                      user.save(function(error){
                        if(error){ 
                          throw error;
                        }
                     }); 
                   
                    }
                  
                  })

               }
              
              })
               
           })
         
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
          agrements.forEach(function (agreement) {   
              var document = {
                  positionid :  agreement._id,
                  positionname :  agreement.name,
                  agreementid:  agreement.agreementsId,
                  type:agreement.type,
                  biddingstatus: "pending"
                };

                Agreements.Provider_B_Agreements.findOne({"offerid":agreement.agreementsId,"agreementstatus": "Accepted"})
                .exec((err, data) => {
                if (data )
                {
                  Agreement_Openservice_request.Provider_B_Openservice_Requests.findOne({"positionid":agreement._id})
                  .exec((err, data) => {
                  if (!data || data.length==0)
                  {
                    var user = new Agreement_Openservice_request.Provider_B_Openservice_Requests(document); 
                    console.log("saving user in B");
                    console.log(user);
                    user.save(function(error){
                      if(error){ 
                        throw error;
                      }
                   }); 
                 
                  }
                
                })
              }
              
              })
               
           })
      }
  })

  User.Provider_C.findById(id)
  .exec((err, data) => {
      if (data) 
      {
          agrements.forEach(function (agreement) {   
              var document = {
                  positionid :  agreement._id,
                  positionname :  agreement.name,
                  agreementid:  agreement.agreementsId,
                  type:agreement.type,
                  biddingstatus: "pending"
                };

                Agreements.Provider_C_Agreements.findOne({"offerid":agreement.agreementsId,"agreementstatus": "Accepted"})
                .exec((err, data) => {
                if (data )
                {
                  Agreement_Openservice_request.Provider_C_Openservice_Requests.findOne({"positionid":agreement._id})
                  .exec((err, data) => {
                  if (!data || data.length==0)
                  {
                    var user = new Agreement_Openservice_request.Provider_C_Openservice_Requests(document); 
                    console.log("saving user in C");
                    console.log(user);
                    user.save(function(error){
                      if(error){ 
                        throw error;
                      }
                   }); 
                 
                  }
                
                })
              }
              
              })
               
           })
      }
  })

  User.Provider_D.findById(id)
    .exec((err, data) => {
      if (data) 
      {
          agrements.forEach(function (agreement) {   
              var document = {
                  positionid :  agreement._id,
                  positionname :  agreement.name,
                  agreementid:  agreement.agreementsId,
                  type:agreement.type,
                  biddingstatus: "pending"
                };

                Agreements.Provider_D_Agreements.findOne({"offerid":agreement.agreementsId,"agreementstatus": "Accepted"})
                .exec((err, data) => {

                if (data)
                {

                  Agreement_Openservice_request.Provider_D_Openservice_Requests.findOne({"positionid":agreement._id}
                      )
                    .exec((err, data) => {
                  console.log("testing bidding-3:",data);
                  
              
                    if (!data || data.length==0)
                    {
                      var user = new Agreement_Openservice_request.Provider_D_Openservice_Requests(document); 
                      console.log("saving user in D");
                      user.save(function(error){
                        if(error){ 
                          throw error;
                        }
                     }); 
                   
                    }
                  
                  })
                }
              
              })
               
           })

      }
  })



};

const getopenservicerequests=  (req, res) => {

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
          Agreement_Openservice_request.Provider_A_Openservice_Requests.find()
              .exec((err, data) => {
              if (data) 
              {
                res.render('openservice',{
                            title:"Openservices",
                            details: data
                          });
              }
              })
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
          console.log("i am in employee provider B");
          console.log("i am in employee provider B");
          Agreement_Openservice_request.Provider_B_Openservice_Requests.find()
              .exec((err, data) => {
              if (data) 
              {
                res.render('openservice',{
                    title:"Openservices",
                    details: data
                  });
              }
              })
      }
  })

  User.Provider_C.findById(id)
  .exec((err, data) => {
      if (data) 
      {
          console.log("i am in employee provider C");
          console.log("i am in employee provider C");
          Agreement_Openservice_request.Provider_C_Openservice_Requests.find()
              .exec((err, data) => {
              if (data) 
              {
                res.render('openservice',{
                    title:"Openservices",
                    details: data
                  });
              }
              })
      }
  })

  User.Provider_D.findById(id)
    .exec((err, data) => {
      if (data) 
      {
          console.log("i am in employee provider D");
          console.log("i am in employee provider D");
          Agreement_Openservice_request.Provider_D_Openservice_Requests.find()
              .exec((err, data) => {
                  console.log("i am in employee provider D-1");
              if (data) 
              {
                  console.log("i am in employee provider D-2");
                  console.log(data)
                  res.render('openservice',{
                    title:"Openservices",
                    details: data
                  });
              }
              })
      }
  })



};


module.exports = {openservicedata,getopenservicerequests};