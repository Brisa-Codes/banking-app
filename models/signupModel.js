const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// sign up schema
const signupSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
signupSchema.plugin(passportLocalMongoose, {
    usernameField: 'email'
});
// connect to mongoose
const Signup = module.exports = mongoose.model('Signup', signupSchema);