var express = require('express');
var router = express.Router();
var Employee = require('../models/Employee');

const addemployee = (req, res) => {
  try{
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
    var provider = req.body.provider_name;
 
    if (provider == "A")
    {
      var user = new Employee.Provider_A_employee(document); 
    }
    else if(provider == "B")
    {
      var user = new Employee.Provider_B_employee(document);
    }
    else if(provider == "C")
    {
      var user = new Employee.Provider_C_employee(document);
    }
    else if(provider == "D")
    {
      var user = new Employee.Provider_D_employee(document);
    }
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
  }
 catch(error)
 {
  console.log(error.message);
 }
};

const Getemployeedata =  (req, res) => {
try{
  Employee.Provider_A_employee.find({}).exec((err, data) => {
    if (data) 
    {
      res.render('employee', {
        title: 'onboardemployee','user' : data
      })
    }
})
Employee.Provider_B_employee.find({}).exec((err, data) => {
  if (data) 
  {
    res.render('employee', {
      title: 'onboardemployee','user' : data
    })
  }
})
Employee.Provider_C_employee.find({}).exec((err, data) => {
  if (data) 
  {
    res.render('employee', {
      title: 'onboardemployee','user' : data
    })
  }
})
Employee.Provider_D_employee.find({}).exec((err, data) => {
  if (data) 
  {
    res.render('employee', {
      title: 'onboardemployee','user' : data
    })
  }
})
}
catch(error){
  console.log(error.message);
}
};

module.exports = {addemployee,Getemployeedata};