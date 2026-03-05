import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URL) {
            throw new Error("MONGODB_URL is not defined in the environment variables.")
        }

        mongoose.connection.on("connected", () => {
            console.log("Database connected successfully.....")
        })

        await mongoose.connect(process.env.MONGODB_URL)

    } catch (error) {
        console.error("Database connection error:", error.message)
    }
}

export default connectDB;