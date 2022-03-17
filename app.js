//test
console.log('i am app.js')

//requires
const express = require('express')
const app = express()
require('dotenv').config()

//server implementation
app.listen(process.env.PORT || 5000)

app.get('/', (req,res)=>{
    res.send('<h1 style="text-align:center">I am the MBS App</h1>')
})

//server end
