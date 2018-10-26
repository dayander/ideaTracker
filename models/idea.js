var mongoose = require('mongoose');


var ideaSchema = mongoose.Schema({
    quickTitle: String,
    description: String,
    ideaURL: String,
    priority: String,









});


var Ideas = mongoose.model('Ideas', ideaSchema);


module.exports = Ideas;