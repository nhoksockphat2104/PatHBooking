const mongoose = require("mongoose");
var mongoURL = 'mongodb+srv://phatvan2104:NCBXD2ntWRrroB8L@cluster0.bleoxtc.mongodb.net/mern-rooms'

mongoose.connect(mongoURL) //{useUnifiedTopology: true, useNewUrlParser: true}
var connection = mongoose.connection
connection.on('error', ()=>{
    console.log('Mongo DB Connection Fail')
})
connection.on('connected', ()=>{
    console.log('Mongo DB Connection Successful')
})
module.exports = mongoose