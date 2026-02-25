import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./route/user.Routes.js";
import resumeRouter from "./route/resumeroutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Database Connection
await connectDB()

app.use(express.json());
app.use(cors())

app.get('/', (req,res)=>res.send("Server is running"))
app.use('/api/users',userRouter)
app.use('/api/resumes',resumeRouter)

app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`));
