const mongoose = require('mongoose')
require("dotenv").config();

const DbConnect=async()=>{
    try {
        let result = await mongoose.connect(process.env.DB_URI)
        console.log('database is connected')
    } catch(error){
        console.log('database is not connected')
    }
}

module.exports = DbConnect; 