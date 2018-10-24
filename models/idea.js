var mongoose = require('mongoose');


var ideaSchema = mongoose.Schema({
    idea: String,








});


var Ideas = mongoose.model('Ideas', ideaSchema);


module.exports = Ideas;