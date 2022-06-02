const mongoose = require('mongoose');

// sign up schema
const signupSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
// connect to mongoose
const Signup = module.exports = mongoose.model('Signup', signupSchema);