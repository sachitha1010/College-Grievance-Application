import express, { json, urlencoded } from "express";
import cors from "cors"; 
import mongoose from "mongoose";
import { connect } from "mongoose";
import grievanceRoutes from "./routes/grievanceRoutes.js";
import adminroutes from "./routes/adminroutes.js";
import cookieParser from "cookie-parser";

import usserrouter from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
const PORT = process.env.PORT || 3001;

mongoose.connect("mongodb+srv://sachitha:sachitha@cluster0.ozc1dyl.mongodb.net/grievance?retryWrites=true&w=majority");

app.use("/api",usserrouter);
app.use("/api/grievances",grievanceRoutes);
app.use("/api/admin",adminroutes);

app.listen(PORT,()=> {
    console.log(`Server is running on port: ${PORT}`);
})
