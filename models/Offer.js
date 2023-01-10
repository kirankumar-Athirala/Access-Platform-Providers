var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchemas = new Schema({
    offerid: { type: String,  required: [true, 'Employee name must be provided'] },
    PositionID: { type: String,  required: [true, 'Provider email must be provided'] },
    employee_name: { type: String,  required: [true, 'Provider id must be provided'] },
    provider_name: { type: String,  required: [true, 'Provider id must be provided'] },
    contactperson: { type: String,  required: [true, 'Provider id must be provided'] },
    externalperson: { type: String,  required: [true, 'Provider id must be provided'] },
    rate: { type: String,  required: [true, 'Provider id must be provided'] },
    notes: { type: String,  required: [true, 'Provider id must be provided'] },
    dateuntil: { type: String,  required: [true, 'Provider id must be provided'] },
    document: { type: String,  required: [true, 'Provider id must be provided'] },
});

const provider_a = mongoose.connection.useDb('provider-a');
const provider_b = mongoose.connection.useDb('provider-b');
const provider_c = mongoose.connection.useDb('provider-c');
const provider_d = mongoose.connection.useDb('provider-d');

const Provider_A_offer = provider_a.model('offer', userSchemas);
const Provider_B_offer = provider_b.model('offer', userSchemas);
const Provider_C_offer = provider_c.model('offer', userSchemas);
const Provider_D_offer = provider_d.model('offer', userSchemas);


module.exports = {Provider_A_offer,Provider_B_offer,Provider_C_offer,Provider_D_offer};
