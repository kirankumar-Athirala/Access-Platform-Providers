var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({

    provider_name: { type: String,  required: [true, 'Provider name must be provided'] },
    contactperson: { type: String,  required: [true, 'Contact Person name must be provided'] },
    externalperson: { type: String,  required: [true, 'Provider name must be provided'] },
    rate: { type: String,  required: [true, 'Provider name must be provided'] },
    dateuntil: { type: date,  required: [true, 'Provider name must be provided'] },
    notes: { type: String,  required: [true, 'Provider name must be provided'] },
    document: { type: String },
});
module.exports = mongoose.model('Employee', userSchema);