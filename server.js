console.clear()
//importing express
const express = require('express')
const cors = require("cors"); // pour qu'on puisse envoyer un call API
//initialisation
const app = express()
//importing database
const DbConnect = require('./DBconnect')
//connect to database
DbConnect()
//convert json:middleware
app.use(express.json()) 
app.use(cors())

app.use('/user', require('./routes/userRouter'))
app.use('/voyage', require('./routes/voyageRouter'))


require("dotenv").config();

app.listen(process.env.PORT, (err) => {
    err ? console.log(err) : console.log(`server is running on ${process.env.PORT}`)
})