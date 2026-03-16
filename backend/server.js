import express from 'express'
import errorMiddleware from './middleware/error.middleware.js';
import launcherRoute from "./routes/launchers.routes.js"; 


const app = express()

const PORT = 3000;

app.use("/api/launchers", launcherRoute);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})