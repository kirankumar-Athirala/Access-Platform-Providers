var express = require('express');
var router = express.Router();

const multer = require('multer');
const mongoose = require('mongoose');
var Employee = require('../models/Employee');
var User = require('../models/User');
var crypto    = require('crypto'), hmac, signature;
const upload = multer({ dest: 'uploads/' });


//  const addemployee =  (req, res) => {
//     console.log("i am in employee");
//     var document = {
//         employee_name:  req.body.employee_name,
//         provider_name:  req.body.provider_name, 
//         contactperson:  req.body.contactperson, 
//         externalperson: req.body.externalperson, 
//         rate:req.body.rate,
//         dateuntil: req.body.dateuntil, 
//         notes:  req.body.notes, 
//         document: req.body.document,
//         status: "Available",
//       };
//       const id =req.session.passport.user;
//       console.log(id);
//       try{
//         const id =req.session.passport.user;


//         User.Provider_A.findById(id)
//         .exec((err, data) => {
//         if (data) 
//         {
//             console.log("i am in employee provider A");
//             console.log("i am in employee provider A");
//             var user = new Employee.Provider_A_employee(document); 
//             user.save(function(error){
//               console.log(user);
//               if(error){ 
//                 throw error;
//               }
//               res.json({message : "Data saved successfully.", status : "success"});
//            }); 
//         }
//     })
//       }
//       catch(error){
//         console.log(error.message);
//       }


//       User.Provider_B.findById(id)
//       .exec((err, data) => {
//         if (data) 
//         {
//             var user = new Employee.Provider_B_employee(document); 
//             user.save(function(error){
//               console.log(user);
//               if(error){ 
//                 throw error;
//               }
//               res.json({message : "Data saved successfully.", status : "success"});
//            }); 
//         }
//     })

//     User.Provider_C.findById(id)
//     .exec((err, data) => {
//         if (data) 
//         {
//             var user = new Employee.Provider_C_employee(document); 
//             user.save(function(error){
//               console.log(user);
//               if(error){ 
//                 throw error;
//               }
//               res.json({message : "Data saved successfully.", status : "success"});
//            }); 
//         }
//     })

//     User.Provider_D.findById(id)
//       .exec((err, data) => {
//         if (data) 
//         {
//             var user = new Employee.Provider_D_employee(document); 
//             user.save(function(error){
//               console.log(user);
//               if(error){ 
//                 throw error;
//               }
//               res.json({message : "Data saved successfully.", status : "success"});
//            }); 
//         }
//     })

    
// };


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


const addemployee =  (req, res) => {

  const Document_A = new Employee.Provider_A_employee();
  const Document_B = new Employee.Provider_B_employee();
  const Document_C = new Employee.Provider_C_employee();
  const Document_D = new Employee.Provider_D_employee();

  console.log("i am in employee");
  // var document = {
  //     employee_name:  req.body.employee_name,
  //     provider_name:  req.body.provider_name, 
  //     contactperson:  req.body.contactperson, 
  //     externalperson: req.body.externalperson, 
  //     rate:req.body.rate,
  //     dateuntil: req.body.dateuntil, 
  //     notes:  req.body.notes, 
  //     document: req.body.document,
  //     status: "Available",
  //   };
    const id =req.session.passport.user;
    console.log(id);
    try{
      const id =req.session.passport.user;


      User.Provider_A.findById(id)
      .exec((err, data) => {
      if (data) 
      {
        Document_A.employee_name = req.body.employee_name;
        Document_A.provider_name =  req.body.provider_name; 
        Document_A.contactperson =  req.body.contactperson; 
        Document_A.externalperson = req.body.externalperson; 
        Document_A.rate = req.body.rate;
        Document_A.dateuntil = req.body.dateuntil; 
        Document_A.notes = req.body.notes;
        Document_A.document.data = req.file.buffer;
        Document_A.document.contentType = req.file.mimetype;
        Document_A.status = "Available";
          console.log("i am in employee provider A file upload");
          console.log("i am in employee provider A");

          Document_A.save(function(error){
            if(error){ 
              throw error;
            }
            res.redirect('/dashboard');
            //res.json({message : "Data saved successfully.", status : "success"});
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
        Document_B.employee_name = req.body.employee_name;
        Document_B.provider_name =  req.body.provider_name; 
        Document_B.contactperson =  req.body.contactperson; 
        Document_B.externalperson = req.body.externalperson; 
        Document_B.rate = req.body.rate;
        Document_B.dateuntil = req.body.dateuntil; 
        Document_B.notes = req.body.notes;
        Document_B.document.data = req.file.buffer;
        Document_B.document.contentType = req.file.mimetype;
        Document_B.status = "Available";
          console.log("i am in employee provider B file upload");
          console.log("i am in employee provider B");

          Document_B.save(function(error){
            if(error){ 
              throw error;
            }
            res.redirect('/dashboard');
         }); 
      }
  })

  User.Provider_C.findById(id)
  .exec((err, data) => {
      if (data) 
      {
        Document_C.employee_name = req.body.employee_name;
        Document_C.provider_name =  req.body.provider_name; 
        Document_C.contactperson =  req.body.contactperson; 
        Document_C.externalperson = req.body.externalperson; 
        Document_C.rate = req.body.rate;
        Document_C.dateuntil = req.body.dateuntil; 
        Document_C.notes = req.body.notes;
        Document_C.document.data = req.file.buffer;
        Document_C.document.contentType = req.file.mimetype;
        Document_C.status = "Available";
          console.log("i am in employee provider C file upload");
          console.log("i am in employee provider C");

          Document_C.save(function(error){
            if(error){ 
              throw error;
            }
            res.redirect('/dashboard');
         }); 
      }
  })

  User.Provider_D.findById(id)
    .exec((err, data) => {
      if (data) 
      {
        Document_D.employee_name = req.body.employee_name;
        Document_D.provider_name =  req.body.provider_name; 
        Document_D.contactperson =  req.body.contactperson; 
        Document_D.externalperson = req.body.externalperson; 
        Document_D.rate = req.body.rate;
        Document_D.dateuntil = req.body.dateuntil; 
        Document_D.notes = req.body.notes;
        Document_D.document.data = req.file.buffer;
        Document_D.document.contentType = req.file.mimetype;
        Document_D.status = "Available";
          console.log("i am in employee provider D file upload");
          console.log("i am in employee provider D");

          Document_D.save(function(error){
            if(error){ 
              throw error;
            }
            res.redirect('/dashboard');
         }); 
      }
  })

  
};
module.exports = {addemployee,GetEmployeeData,saveemployeestatus};