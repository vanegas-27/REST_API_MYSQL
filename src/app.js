import express from "express";
import morgan from "morgan";
import router from "./routes/language.routes.js";


const app = express();

//setting
app.set("port",4000);


//routes
app.use("/api/languages/",router);


//middlewares
app.use(morgan("dev"));// <- hace seguimineto de las peticiones que se hacen
app.use(express.json()) // <- para que permita peticiones con body de json

export default app;