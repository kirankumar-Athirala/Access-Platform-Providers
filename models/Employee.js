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

const provider_a = mongoose.connection.useDb('provider-a');
const provider_b = mongoose.connection.useDb('provider-b');
const provider_c = mongoose.connection.useDb('provider-c');
const provider_d = mongoose.connection.useDb('provider-d');

const Provider_A_employee = provider_a.model('Employee', userSchemas);
const Provider_B_employee = provider_b.model('Employee', userSchemas);
const Provider_C_employee = provider_c.model('Employee', userSchemas);
const Provider_D_employee = provider_d.model('Employee', userSchemas);


module.exports = {Provider_A_employee,Provider_B_employee,Provider_C_employee,Provider_D_employee};
