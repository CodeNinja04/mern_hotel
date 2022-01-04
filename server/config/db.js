const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI,{useunifiedTopology:true,useNewUrlParser:true})

var connection=mongoose.connection;

connection.on('error',() =>{
    console.log('connection failed with mongodb')
} )

connection.on('connected',() =>{
    console.log('mongodb connected sucessfully')
})

module.exports = mongoose