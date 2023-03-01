import {prisma,connectDB} from "./config/db"
import  express,{Application} from "express";
import RouterUser from "./routes/user.routes";
import  RouterBlog  from "./routes/blog.routes";
import * as dotenv from 'dotenv' 
dotenv.config()

const app:Application= express();
app.use(express.json());
connectDB();

app.use('/users',RouterUser)
app.use('/blog',RouterBlog)
// Port
app.listen(3001, () => console.log("Server Started"));