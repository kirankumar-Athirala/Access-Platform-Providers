const mongoose = require('mongoose');

const providers =  (req, res) => {


    mongoose.connect('mongodb+srv://agile:agileproject@cluster0.9ke8z3d.mongodb.net/?retryWrites=true&w=majority');
    mongoose.connection.on('open', async () => {
        let provider_names = new Array();
        const databases = await mongoose.connection.db.admin().listDatabases();
        const appDatabases = databases.databases.filter(db => !['admin','local'].includes(db.name));
        appDatabases.forEach(function (db) { 
             provider_names.push(db.name.toString());

      });
      res.send(provider_names);
    
     });

  
};

module.exports = {providers};