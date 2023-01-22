var express = require('express');
var router = express.Router();

var OfferEmployee = require('../models/Offer');
var Employee = require('../models/Employee');
var User = require('../models/User');
var crypto    = require('crypto'), hmac, signature;

//  const addoffer =  (req, res) => {
//     console.log("i am in employee");
//     var document = {
//       employeeid :  req.body.employeeid,
//       positionid:  req.body.positionid,
//       agreementsid : req.body.agreementsid,
//       employee_name : req.body.employee_name,
//       provider_name : req.body.provider_name,
//       contactperson : req.body.contactperson,
//       externalperson : req.body.externalperson,
//       rate : req.body.rate,
//       notes : req.body.notes,
//       dateuntil : req.body.dateuntil,
//       document : req.body.document,
//       status:"Offered",
//       };

//       var document_employee = {

//         status:"Offered",
//         };
//       const id =req.session.passport.user;
//       console.log(id);
//       try{
//         const id =req.session.passport.user;


//         User.Provider_A.findById(id)
//         .exec((err, data) => {
//         if (data) 
//         {
//             Employee.Provider_A_employee.findOneAndUpdate({"employee_name":req.body.employee_name}, 
//             {
//                $set : document_employee
//             },
//             {new: true},
//             (err, user) => {
//               if (err) throw err;
//                  // Some handle 
//                }
//             );

//             console.log("i am in employee provider A");
//             console.log("i am in employee provider A");
//             var user = new OfferEmployee.Provider_A_offer(document); 
//             user.save(function(error){
//               // console.log(offer);
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
//             Employee.Provider_B_employee.findOneAndUpdate({"employee_name":req.body.employee_name}, 
//             {
//                $set : document_employee
//             },
//             {new: true},
//             (err, user) => {
//               if (err) throw err;
//                  // Some handle 
//                }
//             );

//             var user = new OfferEmployee.Provider_B_offer(document); 
//             user.save(function(error){
//               // console.log(offer);
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
//             Employee.Provider_C_employee.findOneAndUpdate({"employee_name":req.body.employee_name}, 
//             {
//                $set : document_employee
//             },
//             {new: true},
//             (err, user) => {
//               if (err) throw err;
//                  // Some handle 
//                }
//             );
//             var user = new OfferEmployee.Provider_C_offer(document); 
//             user.save(function(error){
//               // console.log(offer);
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
//             Employee.Provider_D_employee.findOneAndUpdate({"employee_name":req.body.employee_name}, 
//             {
//                $set : document_employee
//             },
//             {new: true},
//             (err, user) => {
//               if (err) throw err;
//                  // Some handle 
//                }
//             );
//             var user = new OfferEmployee.Provider_D_offer(document); 
//             user.save(function(error){
//               // console.log(offer);
//               if(error){ 
//                 throw error;
//               }
//               res.json({message : "Data saved successfully.", status : "success"});
//            }); 
//         }
//     })

    
// };

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



const addoffer =  (req, res) => {

  const Document_A = new OfferEmployee.Provider_A_offer();
  const Document_B = new OfferEmployee.Provider_B_offer();
  const Document_C = new OfferEmployee.Provider_C_offer();
  const Document_D = new OfferEmployee.Provider_D_offer();
  var document_employee = {

    status:"Offered",
    };
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
        Employee.Provider_A_employee.findByIdAndUpdate(req.body.employeeid, 
            {
               $set : document_employee
            },
            {new: true},
            (err, user) => {
              if (err) throw err;
                 // Some handle 
               }
            );

            Employee.Provider_A_employee.findById(req.body.employeeid)
            .exec((err, data) => {
              if (data) 
              {
                Document_A.employeeid =  req.body.employeeid,
                Document_A.positionid = req.body.positionid,
                Document_A.agreementsid = req.body.agreementsid,
                Document_A.employee_name = req.body.employee_name;
                Document_A.provider_name =  req.body.provider_name; 
                Document_A.contactperson =  req.body.contactperson; 
                Document_A.externalperson = req.body.externalperson; 
                Document_A.rate = req.body.rate;
                Document_A.dateuntil = req.body.dateuntil; 
                Document_A.notes = req.body.notes;
                Document_A.document.data = data.document.data;
                Document_A.document.contentType = data.document.contentType;
                Document_A.status = "Available";
                  console.log("i am in employee provider A file upload");
                  console.log("i am in employee provider A");

                  Document_A.save(function(error){
                    if(error){ 
                      throw error;
                    }
                    res.json({message : "Data saved successfully.", status : "success"});
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
        Employee.Provider_B_employee.findByIdAndUpdate(req.body.employeeid, 
          {
             $set : document_employee
          },
          {new: true},
          (err, user) => {
            if (err) throw err;
               // Some handle 
             }
          );

          Employee.Provider_B_employee.findById(req.body.employeeid)
          .exec((err, data) => {
            if (data) 
            {
              Document_B.employeeid =  req.body.employeeid,
              Document_B.positionid = req.body.positionid,
              Document_B.agreementsid = req.body.agreementsid,
              Document_B.employee_name = req.body.employee_name;
              Document_B.provider_name =  req.body.provider_name; 
              Document_B.contactperson =  req.body.contactperson; 
              Document_B.externalperson = req.body.externalperson; 
              Document_B.rate = req.body.rate;
              Document_B.dateuntil = req.body.dateuntil; 
              Document_B.notes = req.body.notes;
              Document_B.document.data = data.document.data;
              Document_B.document.contentType = data.document.contentType;
              Document_B.status = "Available";
                console.log("i am in employee provider B file upload");
                console.log("i am in employee provider B");

                Document_B.save(function(error){
                  if(error){ 
                    throw error;
                  }
                  res.json({message : "Data saved successfully.", status : "success"});
              }); 

            }
           })

      }
  })

  User.Provider_C.findById(id)
  .exec((err, data) => {
      if (data) 
      {
        Employee.Provider_C_employee.findByIdAndUpdate(req.body.employeeid, 
          {
             $set : document_employee
          },
          {new: true},
          (err, user) => {
            if (err) throw err;
               // Some handle 
             }
          );

          Employee.Provider_C_employee.findById(req.body.employeeid)
          .exec((err, data) => {
            if (data) 
            {
              Document_C.employeeid =  req.body.employeeid,
              Document_C.positionid = req.body.positionid,
              Document_C.agreementsid = req.body.agreementsid,
              Document_C.employee_name = req.body.employee_name;
              Document_C.provider_name =  req.body.provider_name; 
              Document_C.contactperson =  req.body.contactperson; 
              Document_C.externalperson = req.body.externalperson; 
              Document_C.rate = req.body.rate;
              Document_C.dateuntil = req.body.dateuntil; 
              Document_C.notes = req.body.notes;
              Document_C.document.data = data.document.data;
              Document_C.document.contentType = data.document.contentType;
              Document_C.status = "Available";
                console.log("i am in employee provider C file upload");
                console.log("i am in employee provider C");

                Document_C.save(function(error){
                  if(error){ 
                    throw error;
                  }
                  res.json({message : "Data saved successfully.", status : "success"});
              }); 

            }
           })

      }
  })

  User.Provider_D.findById(id)
    .exec((err, data) => {
      if (data) 
      {
        Employee.Provider_D_employee.findByIdAndUpdate(req.body.employeeid, 
          {
             $set : document_employee
          },
          {new: true},
          (err, user) => {
            if (err) throw err;
               // Some handle 
             }
          );

          Employee.Provider_D_employee.findById(req.body.employeeid)
          .exec((err, data) => {
            if (data) 
            {
              Document_D.employeeid =  req.body.employeeid,
              Document_D.positionid = req.body.positionid,
              Document_D.agreementsid = req.body.agreementsid,
              Document_D.employee_name = req.body.employee_name;
              Document_D.provider_name =  req.body.provider_name; 
              Document_D.contactperson =  req.body.contactperson; 
              Document_D.externalperson = req.body.externalperson; 
              Document_D.rate = req.body.rate;
              Document_D.dateuntil = req.body.dateuntil; 
              Document_D.notes = req.body.notes;
              Document_D.document.data = data.document.data;
              Document_D.document.contentType = data.document.contentType;
              Document_D.status = "Available";
                console.log("i am in employee provider D file upload");
                console.log("i am in employee provider D");

                Document_D.save(function(error){
                  if(error){ 
                    throw error;
                  }
                  res.json({message : "Data saved successfully.", status : "success"});
              }); 

            }
           })

      }
  })

  
};
module.exports = {addoffer,getroffers};