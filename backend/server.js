import express from 'express'
import errorMiddleware from './middleware/error.middleware.js';
import launcherRoute from "./routes/launchers.routes.js"; 
import dotenv from "dotenv"
import mongoConnection from "./database/mongo.connection.js";

const PORT = process.env.PORT || 3000;

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/launchers", launcherRoute);

app.use(errorMiddleware);

await mongoConnection();

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})