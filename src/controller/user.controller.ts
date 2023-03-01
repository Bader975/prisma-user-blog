import {prisma} from '../config/db';
import express, { Application, Request, Response } from "express";
const app: Application = express();
app.use(express.json());




// Creat
export const createUser = async (req: Request, res: Response) => {
    const user = req.body

    const newUser = await prisma.user.create({
        data: user

    })
    res.json({ "msg": "The user has been created", newUser })
}


// LOGIN

// export const login = async (req: Request, res: Response) => {
//     let users = await prisma.user.findMany()
//     res.json(users);
// }

// Read 
export const getallUsers = async (req: Request, res: Response) => {
    let users = await prisma.user.findMany()
    res.json(users);
}

export const getOneUser = async (req: Request, res: Response) => {

    try {
        let {id} = req.params
        let user_one = await prisma.user.findFirst({
            where: { 
                id,
            },
            select: {
                email: true,
                username: true,
                password: true,
                role: true
              },

        })
        res.json(user_one);
    } catch (error) {
       res.json(error)
        
    }
   
}

