var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchemas = new Schema({
    offerid: { type: String,  required: [true, 'ID name must be provided'] },
    name: { type: String,  required: [true, ' name must be provided'] },
    type: { type: String,  required: [true, 'type name must be provided'] },
    dailyrateindication: { type: String},
    status: { type: String,  required: [true, 'status must be provided'] },
    cycle: { type: String , required: [true, 'cycle  must be provided']},
    startTime: { type: String,  required: [true, 'start time must be provided'] },
    endTime: { type: String,  required: [true, 'endtime must be provided'] },
    location: { type: String,  required: [true, 'location must be provided'] },
    agreementstatus: { type: String,  required: [true, 'location must be provided'] },
});


const provider_a = mongoose.connection.useDb('provider-a');
const provider_b = mongoose.connection.useDb('provider-b');
const provider_c = mongoose.connection.useDb('provider-c');
const provider_d = mongoose.connection.useDb('provider-d');

const Provider_A_Agreements = provider_a.model('Agreements', userSchemas);
const Provider_B_Agreements = provider_b.model('Agreements', userSchemas);
const Provider_C_Agreements = provider_c.model('Agreements', userSchemas);
const Provider_D_Agreements = provider_d.model('Agreements', userSchemas);


module.exports = {Provider_A_Agreements,Provider_B_Agreements,Provider_C_Agreements,Provider_D_Agreements};