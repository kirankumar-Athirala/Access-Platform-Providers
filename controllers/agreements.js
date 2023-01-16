var express = require('express');
var router = express.Router();

var Agreements = require('../models/Agreements');
var Agreement_Bids = require('../models/AgreementBidding');
var User = require('../models/User');
var crypto    = require('crypto'), hmac, signature;

 const addagreement =  (req, res) => {
    var document = {
        offerid :  req.body.offerid,
        name:  req.body.PositionID,
        type : req.body.employee_name,
        dailyrateindication : req.body.provider_name,
        status : req.body.contactperson,
        cycle : req.body.externalperson,
        startTime : req.body.rate,
        notes : req.body.notes,
        endTime : req.body.dateuntil,
        location : req.body.document,
        agreementstatus: "Accepted"
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
            var user = new Agreements.Provider_A_Agreements(document); 
            console.log(user);
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
            var user = new Agreements.Provider_B_Agreements(document); 
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
            var user = new Agreements.Provider_C_Agreements(document); 
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
            var user = new Agreements.Provider_D_Agreements(document); 
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

const saveagreements =  (agrements,req,res) => {

          const id =req.session.passport.user;
          try{
            const id =req.session.passport.user;
    
    
            User.Provider_A.findById(id)
            .exec((err, data) => {
            if (data) 
            {
                agrements.forEach(function (agreement) {   
                    var document = {
                        offerid :  agreement._id,
                        name:  agreement.name,
                        type : agreement.type,
                        status : agreement.status,
                        cycle : agreement.cycle,
                        startTime : agreement.startTime,
                        endTime : agreement.endTime,
                        location : agreement.location,
                        agreementstatus: "pending"
                      };

                      Agreements.Provider_A_Agreements.findOne({"offerid":agreement._id})
                      .exec((err, data) => {
                      if (!data || data.length==0)
                      {
                      var user = new Agreements.Provider_A_Agreements(document); 
                      console.log("saving user in A");
                      console.log(user);
                      user.save(function(error){
                        if(error){ 
                          throw error;
                        }
                     }); }
                    
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
                        offerid :  agreement._id,
                        name:  agreement.name,
                        type : agreement.type,
                        status : agreement.status,
                        cycle : agreement.cycle,
                        startTime : agreement.startTime,
                        endTime : agreement.endTime,
                        location : agreement.location,
                        agreementstatus: "pending"
                      };

                      Agreements.Provider_B_Agreements.findOne({"offerid":agreement._id})
                      .exec((err, data) => {
                      if (!data || data.length==0)
                      {
                      var user = new Agreements.Provider_B_Agreements(document); 
                      console.log("saving user in B");
                      console.log(user);
                      user.save(function(error){
                        if(error){ 
                          throw error;
                        }
                     }); }
                    
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
                        offerid :  agreement._id,
                        name:  agreement.name,
                        type : agreement.type,
                        status : agreement.status,
                        cycle : agreement.cycle,
                        startTime : agreement.startTime,
                        endTime : agreement.endTime,
                        location : agreement.location,
                        agreementstatus: "pending"
                      };

                      Agreements.Provider_C_Agreements.findOne({"offerid":agreement._id})
                      .exec((err, data) => {
                      if (!data || data.length==0)
                      {
                      var user = new Agreements.Provider_C_Agreements(document); 
                      console.log("saving user in C");
                      console.log(user);
                      user.save(function(error){
                        if(error){ 
                          throw error;
                        }
                     }); }
                    
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
                        offerid :  agreement._id,
                        name:  agreement.name,
                        type : agreement.type,
                        status : agreement.status,
                        cycle : agreement.cycle,
                        startTime : agreement.startTime,
                        endTime : agreement.endTime,
                        location : agreement.location,
                        agreementstatus: "pending"
                      };

                      Agreements.Provider_D_Agreements.findOne({"offerid":agreement._id})
                      .exec((err, data) => {
                      if (!data || data.length==0)
                      {
                      var user = new Agreements.Provider_D_Agreements(document); 
                      console.log("saving user in D");
                      console.log(user);
                      user.save(function(error){
                        if(error){ 
                          throw error;
                        }
                     }); }
                    
                    })
                     
                 })
  
            }
        })


    
};

const biddingdata =  (agrements,req,res) => {
   
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
                    Agreement_Bids.Provider_A_Agreement_Bids.findOne({"positionid":agreement._id})
                      .exec((err, data) => {
                      if (!data || data.length==0)
                      {
                        var user = new Agreement_Bids.Provider_A_Agreement_Bids(document); 
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
                    Agreement_Bids.Provider_B_Agreement_Bids.findOne({"positionid":agreement._id})
                    .exec((err, data) => {
                    if (!data || data.length==0)
                    {
                      var user = new Agreement_Bids.Provider_B_Agreement_Bids(document); 
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
                    Agreement_Bids.Provider_C_Agreement_Bids.findOne({"positionid":agreement._id})
                    .exec((err, data) => {
                    if (!data || data.length==0)
                    {
                      var user = new Agreement_Bids.Provider_C_Agreement_Bids(document); 
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

                    Agreement_Bids.Provider_D_Agreement_Bids.findOne({"positionid":agreement._id}
                        )
                      .exec((err, data) => {
                    console.log("testing bidding-3:",data);
                    
                
                      if (!data || data.length==0)
                      {
                        var user = new Agreement_Bids.Provider_D_Agreement_Bids(document); 
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


const updateagreement=  (req, res) => {

        var document = {
            dailyrateindication: req.body.dailyrateindication,
            agreementstatus: req.body.agreementstatus,
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
                Agreements.Provider_A_Agreements.findOne({offerid:req.body.offerid})
                .exec((err, data) => {
                    if(data)
                {

                    if (data.agreementstatus ==req.body.agreementstatus)
                    {
                        res.json({message : "Agreement is already Accepted or Rejected.", status : "error"});
                    }
                    else
                    {
                        Agreements.Provider_A_Agreements.findOneAndUpdate({"offerid":req.body.offerid}, 
                            {
                               $set : document
                            },
                            {new: true},
                            (err, user) => {
                              if (err) throw err;
                                 // Some handle 
                                 console.log("i am in employee provider A completed");
                                 console.log("user",user.agreementstatus);
                              res.json({message : "Data saved successfully.", status : "success"});
                               }
                            );
                    }
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
                Agreements.Provider_B_Agreements.findOne({offerid:req.body.offerid})
                .exec((err, data) => {
                    if(data)
                {

                    if (data.agreementstatus ==req.body.agreementstatus)
                    {
                        res.json({message : "Agreement is already Accepted or Rejected.", status : "error"});
                    }
                    else
                    {
                        Agreements.Provider_B_Agreements.findOneAndUpdate({"offerid":req.body.offerid}, 
                            {
                               $set : document
                            },
                            {new: true},
                            (err, user) => {
                              if (err) throw err;
                                 // Some handle 
                                 console.log("i am in employee provider B completed");
                                 console.log("user",user.agreementstatus);
                              res.json({message : "Data saved successfully.", status : "success"});
                               }
                            );
                    }
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
                Agreements.Provider_C_Agreements.findOne({offerid:req.body.offerid})
                .exec((err, data) => {
                    if(data)
                {

                    if (data.agreementstatus ==req.body.agreementstatus)
                    {
                        res.json({message : "Agreement is already Accepted or Rejected.", status : "error"});
                    }
                    else
                    {
                        Agreements.Provider_C_Agreements.findOneAndUpdate({"offerid":req.body.offerid}, 
                            {
                               $set : document
                            },
                            {new: true},
                            (err, user) => {
                              if (err) throw err;
                                 // Some handle 
                                 console.log("i am in employee provider C completed");
                                 console.log("user",user.agreementstatus);
                              res.json({message : "Data saved successfully.", status : "success"});
                               }
                            );
                    }
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
                Agreements.Provider_D_Agreements.findOne({offerid:req.body.offerid})
                .exec((err, data) => {
                    if(data)
                {

                    if (data.agreementstatus ==req.body.agreementstatus)
                    {
                        res.json({message : "Agreement is already Accepted or Rejected.", status : "error"});
                    }
                    else
                    {
                        Agreements.Provider_D_Agreements.findOneAndUpdate({"offerid":req.body.offerid}, 
                            {
                               $set : document
                            },
                            {new: true},
                            (err, user) => {
                              if (err) throw err;
                                 // Some handle 
                                 console.log("i am in employee provider D completed");
                                 console.log("user",user.agreementstatus);
                              res.json({message : "Data saved successfully.", status : "success"});
                               }
                            );
                    }
                }
                })

            }
        })


    
};



const updatebid=  (req, res) => {

    var document = {

        level:req.body.level,
        onsite:req.body.onsite,
        remote:req.body.remote,
        onsiteper:req.body.onsiteper,
        validfrom:req.body.validfrom,
        vailduntil:req.body.vailduntil,
        biddingstatus: req.body.biddingstatus,
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
            Agreement_Bids.Provider_A_Agreement_Bids.find({"positionid":req.body.positionid}
                )
            .exec((err, data) => {
                if(data)
            {

                if (data.biddingstatus ==req.body.biddingstatus)
                {
                    res.json({message : "Bidding process is already completed.", status : "error"});
                }
                else
                {
                    Agreement_Bids.Provider_A_Agreement_Bids.findOneAndUpdate({"positionid":req.body.positionid}, 
                        {
                           $set : document
                        },
                        {new: true},
                        (err, user) => {
                          if (err) throw err;
                             // Some handle 
                             console.log("i am in employee provider A completed");
                             console.log("user",user.agreementstatus);
                          res.json({message : "Data saved successfully.", status : "success"});
                           }
                        );
                }
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
            Agreements.Provider_B_Agreements.findOne({"positionid":req.body.positionid})
            .exec((err, data) => {
                if(data)
            {

                if (data.agreementstatus ==req.body.agreementstatus)
                {
                    res.json({message : "Agreement is already Accepted or Rejected.", status : "error"});
                }
                else
                {
                    Agreements.Provider_B_Agreements.findOneAndUpdate({"positionid":req.body.positionid}, 
                        {
                           $set : document
                        },
                        {new: true},
                        (err, user) => {
                          if (err) throw err;
                             // Some handle 
                             console.log("i am in employee provider B completed");
                             console.log("user",user.agreementstatus);
                          res.json({message : "Data saved successfully.", status : "success"});
                           }
                        );
                }
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
            Agreements.Provider_C_Agreements.findOne({"positionid":req.body.positionid})
            .exec((err, data) => {
                if(data)
            {

                if (data.agreementstatus ==req.body.agreementstatus)
                {
                    res.json({message : "Agreement is already Accepted or Rejected.", status : "error"});
                }
                else
                {
                    Agreements.Provider_C_Agreements.findOneAndUpdate({"positionid":req.body.positionid}, 
                        {
                           $set : document
                        },
                        {new: true},
                        (err, user) => {
                          if (err) throw err;
                             // Some handle 
                             console.log("i am in employee provider C completed");
                             console.log("user",user.agreementstatus);
                          res.json({message : "Data saved successfully.", status : "success"});
                           }
                        );
                }
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
            Agreement_Bids.Provider_D_Agreement_Bids.findOne({"positionid":req.body.positionid}
                )
            .exec((err, data) => {
                if(data)
            {

                if (data.biddingstatus ==req.body.biddingstatus)
                {
                    res.json({message : "Bidding process is already completed.", status : "error"});
                }
                else
                {
                    Agreement_Bids.Provider_D_Agreement_Bids.findOneAndUpdate({"positionid":req.body.positionid}, 
                        {
                           $set : document
                        },
                        {new: true},
                        (err, user) => {
                          if (err) throw err;
                             // Some handle 
                             console.log("i am in employee provider D completed");
                             console.log("user",user.agreementstatus);
                          res.json({message : "Data saved successfully.", status : "success"});
                           }
                        );
                }
            }
            })

        }
    })



};

const getagreement=  (req, res) => {

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
            Agreements.Provider_A_Agreements.find()
                .exec((err, data) => {
                if (data) 
                {
                    res.render('Masteragreement', {
                        title: 'Masteragreements','users' : data
                      })
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
            Agreements.Provider_B_Agreements.find()
                .exec((err, data) => {
                if (data) 
                {
                    res.render('Masteragreement', {
                        title: 'Masteragreements','users' : data
                      })
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
            Agreements.Provider_C_Agreements.find()
                .exec((err, data) => {
                if (data) 
                {
                    res.render('Masteragreement', {
                        title: 'Masteragreements','users' : data
                      })
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
            Agreements.Provider_D_Agreements.find()
                .exec((err, data) => {
                    console.log("i am in employee provider D-1");
                if (data) 
                {
                    console.log("i am in employee provider D-2");
                    console.log(data)
                    res.render('Masteragreement', {
                        title: 'Masteragreements','users' : data
                      })
                }
                })
        }
    })



};

const getagreementbids=  (req, res) => {

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
          Agreement_Bids.Provider_A_Agreement_Bids.find()
              .exec((err, data) => {
              if (data) 
              {
                res.render('Masteragreementbidding', {
                    title: 'MasteragreementDetails','users' : data
                  })
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
          Agreement_Bids.Provider_B_Agreement_Bids.find()
              .exec((err, data) => {
              if (data) 
              {
                res.render('Masteragreementbidding', {
                    title: 'MasteragreementDetails','users' : data
                  })
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
          Agreement_Bids.Provider_C_Agreement_Bids.find()
              .exec((err, data) => {
              if (data) 
              {
                res.render('Masteragreementbidding', {
                    title: 'MasteragreementDetails','users' : data
                  })
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
          Agreement_Bids.Provider_D_Agreement_Bids.find()
              .exec((err, data) => {
                  console.log("i am in employee provider D-1");
              if (data) 
              {
                  console.log("i am in employee provider D-2");
                  console.log(data)
                  res.render('Masteragreementbidding', {
                    title: 'MasteragreementDetails','users' : data
                  })
              }
              })
      }
  })



};

const getagreementbidsforoffer=  (req, res) => {

    var querydata =req.query;
    if (querydata.provider == "A")

    {
        Agreement_Bids.Provider_A_Agreement_Bids.find({biddingstatus: 'Bidded'})
        .exec((err, data) => {
        if (data) 
        {
          res.send(data);
        }
        else
        {
            res.json({message : "No Bidded Offers.", status : "failure"});

        }
        })
    }
    else if (querydata.provider == "B")

    {
        Agreement_Bids.Provider_B_Agreement_Bids.find({biddingstatus: 'Bidded'})
            .exec((err, data) => {
            if (data) 
            {
              res.send(data);
            }
            else
            {
                res.json({message : "No Bidded Offers.", status : "failure"});

            }
            })
    }
    else if (querydata.provider == "C")

    {
        Agreement_Bids.Provider_C_Agreement_Bids.find({biddingstatus: 'Bidded'})
            .exec((err, data) => {
            if (data) 
            {
              res.send(data);
            }
            else
            {
                res.json({message : "No Bidded Offers.", status : "failure"});

            }
            })
    }
    else if (querydata.provider == "D")

    {
        Agreement_Bids.Provider_D_Agreement_Bids.find({biddingstatus: 'Bidded'})
            .exec((err, data) => {
            if (data) 
            {
              res.send(data);
            }
            else
            {
                res.json({message : "No Bidded Offers.", status : "failure"});

            }
            })
    }

};




module.exports = {addagreement,saveagreements,updateagreement,biddingdata,getagreement,getagreementbids,updatebid,getagreementbidsforoffer};