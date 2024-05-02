const mongoose = require('mongoose');
require('dotenv').config();

const functionn = ()=>{
    console.log("Connect to mongoDB Successfully");
}

const connnectToMongoDB = ()=>{
    mongoose.connect('mongodb://localhost:27017/',functionn())
}
module.exports = connnectToMongoDB;