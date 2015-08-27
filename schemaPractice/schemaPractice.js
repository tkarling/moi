var mongoose = require("mongoose");

var whateverSchema = new mongoose.Schema({
  moniker: { type: String, minlength: 8, required: true },
  hair_style: {type: String, enum ["on fleek", "busy bee", "SOS"]},
  facial_hair: {type: Boolean, default: false },
  number_of_eyes: { type: Number, max: 3 }

});

module.exports = mongoose.model("User", whateverSchema);


/////
//  another File
/////

var User = require('./path/to/file');