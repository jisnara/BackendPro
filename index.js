require('dotenv').config()
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})
 
app.get('/twitter',(req,res)=>{
  res.send('hiteshdotcom')
})

app.get('/login',(req,res) =>{
  res.send(' <h1> please login </h1>')
})

app.get('/youtube',(req,res) =>{
  res.send('chai or code')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
}) 