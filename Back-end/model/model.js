const express = require ("express")
const mongoose = require ("mongoose")

const studentSchema = new mongoose.Schema({
       username : {
            type : String,
            value : true,
            unique : true
      },
      email : {
            type : String,
            value : true,
            unique : true
      },
      password : {
            type : String,
            value : true,
      }
})

module.exports = mongoose.model('student',studentSchema)