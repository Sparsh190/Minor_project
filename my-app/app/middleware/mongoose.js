import mongoose from 'mongoose';

const connectDB = handler => async (req,res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }
    await mongoose.connect('mongodb://localhost:27017/quiz');
    return handler(req,res)
}
export default connectDB;