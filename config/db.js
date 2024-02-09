import mongoose from "mongoose";
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("DataBase connected",
         conn.connection.name,
         conn.connection.host);

    } catch (err) {
        console.log(`Error in momgoDB ${err}` )
    }
}

export default connectDB