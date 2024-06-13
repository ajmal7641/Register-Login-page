const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express()
const cors = require("cors")
const routes = require ('./Route/route')

app.use(express.json())
app.use(cors())
app.use('/',routes)

mongoose.connect('mongodb://localhost:27017/webusers')
        .then(()=>{
            console.log("DB connected");
        })
        .catch((err)=>{
            console.log(err);
        })

app.listen(3001,()=>{
      console.log("server Running");
})