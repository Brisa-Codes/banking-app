const localStrategy = require('passport-local').Strategy
const User          = require('../models/signupModel')
const config        = require('../config/database')
const bcrypt        = require('bcryptjs')


//exporting the module
module.exports = (passport) => {
    //localStrategy
    passport.use(new localStrategy((username, password, done) => {
        //matching username detatils
        let query = {username: username}
        User.findOne(query, (err, user) => {
            if(err) throw err
            if(!user) {
                return done(null, false, {message: 'wrong user or password'})
            }
            //matching password details
            bcrypt.compare(password, user.password, (err, isMatching) => {
                if(err) throw err
                if(isMatching) {
                    done(null, user)
                } else {
                    return done(null, false, {message: 'wrong user or password'})
                }
            })
        })
    }))

    //serializingUser
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
    //deserializingUser
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user)
        })
    }) 
}