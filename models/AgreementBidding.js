var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchemas = new Schema({
    positionid: { type: String,  required: [true, 'Position name must be provided'] },
    positionname: { type: String,  required: [true, 'Position name must be provided'] },
    agreementid: { type: String,  required: [true, ' Agreement ID must be provided'] },
    agreementName: { type: String,  required: [true, ' Agreement Name must be provided'] },
    level: { type: String},
    type: { type: String,  required: [true, 'level must be provided'] },
    onsite: { type: String},
    remote: { type: String, },
    onsiteper: { type: String },
    validfrom: { type: String},
    vailduntil: { type: String},
    biddingstatus: { type: String},
});


const provider_a = mongoose.connection.useDb('provider-a');
const provider_b = mongoose.connection.useDb('provider-b');
const provider_c = mongoose.connection.useDb('provider-c');
const provider_d = mongoose.connection.useDb('provider-d');

const Provider_A_Agreement_Bids = provider_a.model('Bids', userSchemas);
const Provider_B_Agreement_Bids = provider_b.model('Bids', userSchemas);
const Provider_C_Agreement_Bids = provider_c.model('Bids', userSchemas);
const Provider_D_Agreement_Bids = provider_d.model('Bids', userSchemas);


module.exports = {Provider_A_Agreement_Bids,Provider_B_Agreement_Bids,Provider_C_Agreement_Bids,Provider_D_Agreement_Bids};