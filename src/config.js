import { config } from "dotenv";

config();

export default {
    host : process.env.HOST || "127.0.0.1",
    database : process.env.DATABASE,
    user : process.env.USER,
    password : process.env.PASSWORD,
    port : process.env.PORT
}