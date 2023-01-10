var express = require('express');
var router = express.Router();

var Employee = require('../models/Employee');
var User = require('../models/User');
var crypto    = require('crypto'), hmac, signature;

 const addemployee =  (req, res) => {
    console.log("i am in employee");
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
            var user = new Employee.Provider_A_employee(document); 
            user.save(function(error){
              console.log(user);
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
            var user = new Employee.Provider_B_employee(document); 
            user.save(function(error){
              console.log(user);
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
            var user = new Employee.Provider_C_employee(document); 
            user.save(function(error){
              console.log(user);
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
            var user = new Employee.Provider_D_employee(document); 
            user.save(function(error){
              console.log(user);
              if(error){ 
                throw error;
              }
              res.json({message : "Data saved successfully.", status : "success"});
           }); 
        }
    })

    
};


// get employee data start
const GetEmployeeData =  (req, res) => {
  try{
    
       
    
    const id =req.session.passport.user


    User.Provider_A.findById(id)
    .exec((err, data) => {
      if (data) 
      {
        Employee.Provider_A_employee.find()
        
       .exec((err,data)=>{
        if(data){
          res.render('offerEmployee', {
            title: 'offerEmployee',
            'employees':data,
            "PositionID" : req.query.id
          })
        }

       })
      }
  })

  User.Provider_B.findById(id)
  .exec((err, data) => {
    if (data) 
    {
      Employee.Provider_B_employee.find()
      
     .exec((err,data)=>{
      if(data){
        res.render('offerEmployee', {
          title: 'offerEmployee',
          'employees':data,
          "PositionID" : req.query.id
        })
      }

     })
    }
})

User.Provider_C.findById(id)
.exec((err, data) => {
  if (data) 
  {
    Employee.Provider_C_employee.find()
    
   .exec((err,data)=>{
    if(data){
      res.render('offerEmployee', {
        title: 'offerEmployee',
        'employees':data,
        "PositionID" : req.query.id
      })
    }

   })
  }
})
User.Provider_D.findById(id)
.exec((err, data) => {
  if (data) 
  {
    Employee.Provider_D_employee.find()
    
   .exec((err,data)=>{
    if(data){
      res.render('offerEmployee', {
        title: 'offerEmployee',
        'employees':data,
        "PositionID" : req.query.id
      })
    }

   })
  }
})



  }catch(error){
    console.log(error.message);
  }
};

module.exports = {addemployee,GetEmployeeData};