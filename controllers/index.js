var express = require('express');
var router = express.Router();
var User = require('../models/User');
//var crypto    = require('crypto'), hmac, signature;
const bcrypt = require('bcryptjs');


const AddUser = (req, res) => {
  try{
  console.log("i am in add user");
  console.log(req.body.password);

  bcrypt.genSalt(10, (err, salt) => {
    
     bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) throw err;
      var encpassword = hash;
      var document = {
        firstname:   req.body.firstname, 
        lastname:   req.body.lastname, 
        mobile:   req.body.mobile, 
        email:       req.body.email, 
        username:   req.body.username, 
        password:    encpassword, 
        provider:      req.body.provider
      };
  
    var provider = req.body.provider;
  
    if (provider == "A")
    {
      var user = new User.Provider_A(document); 
    }
    else if(provider == "B")
    {
      var user = new User.Provider_B(document);
    }
    else if(provider == "C")
    {
      var user = new User.Provider_C(document);
    }
    else if(provider == "D")
    {
      var user = new User.Provider_D(document);
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
      
    });
  });
}
 catch(error)
 {
  console.log(error.message);
 }
};

const UpdateUser = (req, res) => {

  bcrypt.genSalt(10, (err, salt) => {
     bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) throw err;
      var encpassword = hash;
      var document = {
        firstname:   req.body.firstname, 
        lastname:   req.body.lastname, 
        mobile:   req.body.mobile, 
        email:       req.body.email, 
        username:   req.body.username, 
        password:    encpassword, 
      };
  
      var provider = req.body.provider;

    console.log("provider");
    console.log(provider);
  
    if (provider == "A")
    {
      User.Provider_A.findByIdAndUpdate(req.session.passport.user, 
        {
           $set : document
        },
        (err, user) => {
          if (err) throw err;
             // Some handle 
          res.json({message : "Data saved successfully.", status : "success"});
           }
        );
    }
    else if(provider == "B")
    {
      User.Provider_B.findByIdAndUpdate(req.session.passport.user, 
        {
           $set : document
        },
        (err, user) => {
          if (err) throw err;
             // Some handle 
          res.json({message : "Data saved successfully.", status : "success"});
           }
        );
    }
    else if(provider == "C")
    {
      User.Provider_C.findByIdAndUpdate(req.session.passport.user, 
        {
           $set : document
        },
        (err, user) => {
          if (err) throw err;
             // Some handle 
          res.json({message : "Data saved successfully.", status : "success"});
           }
        );
    }
    else if(provider == "D")
    {
      User.Provider_D.findByIdAndUpdate(req.session.passport.user, 
        {
           $set : document
        },
        (err, user) => {
          if (err) throw err;
             // Some handle 
          res.json({message : "Data saved successfully.", status : "success"});
           }
        );
    }
    });
  });


};


const GetUserData =  (req, res) => {
  try{

    const id =req.session.passport.user;


    User.Provider_A.findById(id)
    .exec((err, data) => {
      if (data) 
      {
        res.render('edit', {
          title: 'UpdateProfile','user' : data
        })
      }
  })

  User.Provider_B.findById(id)
    .exec((err, data) => {
      if (data) 
      {
        res.render('edit', {
          title: 'UpdateProfile','user' : data
        })
      }
  })

  User.Provider_C.findById(id)
    .exec((err, data) => {
      if (data) 
      {
        res.render('edit', {
          title: 'UpdateProfile','user' : data
        })
      }
  })

  User.Provider_D.findById(id)
    .exec((err, data) => {
      if (data) 
      {
        res.render('edit', {
          title: 'UpdateProfile','user' : data
        })
      }
  })

    
   /*  if (User.Provider_A.findById(id))
    {
    User.Provider_A.findById(id, function(err, data) {
      if (err)
          res.send(err)
      //res.json(data);
      res.render('edit', {
        title: 'UpdateProfile','user' : data
      })
    });
   }
   else if (User.Provider_B.findById(id))
    {
    User.Provider_B.findById(id, function(err, data) {
      if (err)
          res.send(err)
      //res.json(data);
      res.render('edit', {
        title: 'UpdateProfile','user' : data
      })
    });
   }
   else if (User.Provider_C.findById(id))
    {
    User.Provider_C.findById(id, function(err, data) {
      if (err)
          res.send(err)
      //res.json(data);
      res.render('edit', {
        title: 'UpdateProfile','user' : data
      })
    });
   }
   else if (User.Provider_D.findById(id))
    {
    User.Provider_D.findById(id, function(err, data) {
      if (err)
          res.send(err)
      //res.json(data);
      res.render('edit', {
        title: 'UpdateProfile','user' : data
      })
    });
   }
   else
   {
    res.send(err);
   } */

  }catch(error){
    console.log(error.message);
  }
};


module.exports = {AddUser,GetUserData,UpdateUser};