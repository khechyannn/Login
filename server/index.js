import dotenv from "dotenv";
import express from "express"
import cors from "cors"
import employeeRouter from "./routes/employee.js";
import MongoDB from "./utils/db.js";

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/employee", employeeRouter);

const db = new MongoDB(process.env.MONGO_URI);

// MongoDB connection moved to utils/db.js
db.connect();

app.listen(3001, () => {
    console.log("Server is running!");

})