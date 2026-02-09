import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        let mongodbURI = process.env.MONGODB_URI || "mongodb://localhost:27017/your-database-name";
        const projectName = "resume-builder"
        if (!mongodbURI) {
            throw new Error("MONGODB_URI is not defined in the environment variables.")
        }
        if (mongodbURI.endsWith("/")) {
            mongodbURI = mongodbURI.slice(0, -1);
        }
        
        mongoose.connection.on("connected", ()=>{
            console.log("Database connected successfully.....")
        })

        await mongoose.connect(`${mongodbURI}/${projectName}`)
    } catch (error) {
        console.error("Database connection error:", error.message)
    }
}

export default connectDB;