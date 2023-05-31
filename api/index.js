const express = require('express')
const app = express()

app.use(cors())

app.post('/register',(req,res)=>{
  res.json('test ok')
  
})

app.listen(4000)