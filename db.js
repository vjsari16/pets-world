const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://vijaysari16:vjsari16@cluster0.stdi8yl.mongodb.net/sist-canteen'

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var db = mongoose.connection

db.on('connected', () => {
    console.log("Mongo DB connection Successful");
})

db.on('error', () => {
    console.log("Mongo DB connection Failed");
})

module.exports = mongoose