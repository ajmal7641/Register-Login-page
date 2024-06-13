const express = require("express")
const router = express.Router()
const model = require('../model/model')

router.post('/register',async(req,res)=>{
      const details = new model({
            name : req.body.name,
            email :req.body.email,
            password : req.body.password

      } )

      try {
            const dataSave = await details.save()
            res.status(200).json(dataSave)
      } catch (error) {
        res.status(400).json({message : error.message})
            
      }
})

router.post('/login', (req,res)=>{
      const {email, password} = req.body
      model.findOne({email:email})
            .then(user=>{
                if(user){
                  if(user.password === password) {
                        res.json("success")
                  }
                  else{
                        res.json("password incorrect")
                  }
            } else{
                  res.json("This record not exist")
            }
            })
})

module.exports = router



