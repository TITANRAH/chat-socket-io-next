import mongoose from 'mongoose';
import moongose from 'mongoose';

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL!)
        console.log('mongo db connect');
        
    } catch (error) {
        console.log(error);
        
    }
}