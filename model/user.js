var mongoose = require('mongoose');
var schema = mongoose.Schema;
var userSchema = new schema({
    user: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    name: {
        type: String
    }
});


var user = mongoose.model('user', userSchema);



module.exports = user;