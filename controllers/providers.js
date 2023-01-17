const mongoose = require('mongoose');

const providers =  (req, res) => {

    mongoose.connect('mongodb+srv://agile:agileproject@cluster0.9ke8z3d.mongodb.net/?retryWrites=true&w=majority');
    mongoose.connection.on('connected', () => {
      // Get the list of databases
      mongoose.connection.db.admin().listDatabases()
        .then(dbs => res.send(dbs.databases))
        .catch(error => console.log(error));
    });

  
};

module.exports = {providers};