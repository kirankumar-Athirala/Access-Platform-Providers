var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var validateMobile = function(mobile) {
  var re = /^\+?[0-9]+[0-9\-]+[0-9]$/;
  return re.test(mobile)
};

var userSchema = new Schema({

  firstname: { type: String,  required: [true, 'first name  must be provided'] },
  lastname: { type: String,  required: [true, 'last name must be provided'] },
  mobile:    { 
    
    type: String,     

    Required:  'mobile number cannot be left blank.',
    validate: [validateMobile, 'Please fill a valid mobile number'],
         match: [/^\+?[0-9]+[0-9\-]+[0-9]$/, 'Please fill a valid mobile number'],
    index: {unique: true}
    },
  email:    { 
    
    type: String,     

    Required:  'Email address cannot be left blank.',
    validate: [validateEmail, 'Please fill a valid email address'],
         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    index: {unique: true}
    },

  password: { type: String , required: [true,  'Password cannot be left blank']},

  username: { type: String , required: [true, 'User name must be provided']},

  provider: { type: String , required: [true, 'provider cannot be left blank.']},

});

const provider_a = mongoose.connection.useDb('provider-a');
const provider_b = mongoose.connection.useDb('provider-b');
const provider_c = mongoose.connection.useDb('provider-c');
const provider_d = mongoose.connection.useDb('provider-d');

const Provider_A = provider_a.model('Users', userSchema);
const Provider_B = provider_b.model('Users', userSchema);
const Provider_C = provider_c.model('Users', userSchema);
const Provider_D = provider_d.model('Users', userSchema);


module.exports = {Provider_A,Provider_B,Provider_C,Provider_D};