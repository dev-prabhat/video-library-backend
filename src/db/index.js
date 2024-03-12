import mongoose from "mongoose";
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("Host Name",connectionInstance.connection.host)
    } catch (error) {
        console.log("in error block")
        console.error("ERROR: ",error)
    }
}

export default connectDB