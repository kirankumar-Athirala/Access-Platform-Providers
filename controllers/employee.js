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
        status: "Available",
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
          res.render('employeestatus', {
            title: 'Employee Details',
            'employees':data,
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
        res.render('employeestatus', {
          title: 'Employee Details',
          'employees':data,
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
      res.render('employeestatus', {
        title: 'Employee Details',
        'employees':data,
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
      res.render('employeestatus', {
        title: 'Employee Details',
        'employees':data,
      })
    }

   })
  }
})



  }catch(error){
    console.log(error.message);
  }
};


const saveemployeestatus =  (offerstatus,req,res) => {
  const id =req.session.passport.user;
  try{
    const id =req.session.passport.user;


    User.Provider_A.findById(id)
    .exec((err, data) => {
    if (data) 
    {
      offerstatus.forEach(function (offer) {   
            var document = {
              status: offer.status
              };

              Employee.Provider_A_employee.findById(offer.employeeid)
              .exec((err, data) => {
              if (data)
              {
                Employee.Provider_A_employee.findByIdAndUpdate(offer.employeeid, 
                {
                   $set : document
                },
                {new: true},
                (err, user) => {
                  if (err) throw err;
                     // Some handle 
                     console.log("i am in employee provider A completed");
                   }
                );
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
      offerstatus.forEach(function (offer) {   
        var document = {
          status: offer.status
          };

          Employee.Provider_B_employee.findById(offer.employeeid)
          .exec((err, data) => {
          if (data)
          {
            Employee.Provider_B_employee.findByIdAndUpdate(offer.employeeid, 
            {
               $set : document
            },
            {new: true},
            (err, user) => {
              if (err) throw err;
                 // Some handle 
                 console.log("i am in employee provider B completed");
               }
            );
        }
        
        })
         
     })
   
    }
})

User.Provider_C.findById(id)
.exec((err, data) => {
    if (data) 
    {
      offerstatus.forEach(function (offer) {   
        var document = {
          status: offer.status
          };

          Employee.Provider_C_employee.findById(offer.employeeid)
          .exec((err, data) => {
          if (data)
          {
            Employee.Provider_C_employee.findByIdAndUpdate(offer.employeeid, 
            {
               $set : document
            },
            {new: true},
            (err, user) => {
              if (err) throw err;
                 // Some handle 
                 console.log("i am in employee provider C completed");
               }
            );
        }
        
        })
         
     })
   
    }
})

User.Provider_D.findById(id)
  .exec((err, data) => {
    if (data) 
    {

      offerstatus.forEach(function (offer) {   
        var document = {
          status: offer.status
          };
          console.log(offer.employee_name,offer.status);

          Employee.Provider_D_employee.findById(offer.employeeid)
          .exec((err, data) => {
          if (data)
          {
            console.log("offer test")
            console.log(data.employee_name,data.status);
            Employee.Provider_D_employee.findByIdAndUpdate(offer.employeeid, 
            {
               $set : document
            },
            {new: true},
            (err, user) => {
              if (err) throw err;
                 // Some handle 
                 console.log("i am in employee provider D completed");
               }
            );
        }
        
        })
         
     })
   

    }
})



};
module.exports = {addemployee,GetEmployeeData,saveemployeestatus};