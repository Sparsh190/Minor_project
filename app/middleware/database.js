import { connect } from 'mongoose';
// require('dotenv').config();

const functionn = ()=>{
    console.log("Connect to mongoDB Successfully");
}

const connnectToMongoDB = ()=>{
    connect('mongodb://127.0.0.1:27017/quiz',functionn())
}
export default connnectToMongoDB;

// const url = mongodb+srv://sudhanshu250403:mongoDBatlas@cluster0.zajcgga.mongodb.net/