var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchemas = new Schema({
    employee_name: { type: String,  required: [true, 'Employee name must be provided'] },
    provider_name: { type: String,  required: [true, 'Provider name must be provided'] },
    contactperson: { type: String,  required: [true, 'Contact Person name must be provided'] },
    externalperson: { type: String,  required: [true, 'external must be provided'] },
    rate: { type: String,  required: [true, 'rate must be provided'] },
    dateuntil: { type: Date , required: [true, 'date  must be provided']},
    notes: { type: String,  required: [true, 'notes must be provided'] },
    document: { type: String },
});

module.exports = mongoose.model('Employee', userSchemas);