var express   = require('express');
var router    = express.Router();

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

   /* GET home page. */
  router.get('/', forwardAuthenticated, function(req, res, next) {
   console.log(req.session)
      res.render('login', { title: 'Login and Registration'});
   })

   router.get('/dashboard', ensureAuthenticated, function(req, res,next){
      console.log(req.session.passport.user);
      res.render('dashboard', { title: 'Dashboard'});
   });
   
   
   


module.exports = router;