import { prisma } from '../config/db';
import express, { Application, Request, Response } from "express";
import router from '../routes/user.routes';
const app: Application = express();
app.use(express.json());


// Creat
export const createBlog = async (req: Request, res: Response) => {
    const blog = req.body

    const newBlog = await prisma.blog.create({
        data: blog

    })
    res.json({ "msg": "The Bolg has been created !!!!", newBlog })
}

export const updateBlog = async (req: Request, res: Response) => {
    const blog = req.body
    const  {id } = req.params
    let updateduser = await prisma.blog.update({
        where: {
            id,
        },
        data:blog
  
    })
  
    res.json({ "you updated this Blog": { updateduser } })
  
  
  };

// Read 
export const getallBlog = async (req: Request, res: Response) => {
    let blogs = await prisma.blog.findMany()
    res.json(blogs);
}

export const getOneblog = async (req: Request, res: Response) => {

    try {
        const  id  = req.params
     
        let user_one = await prisma.blog.findMany({
            where: {
                user_id: id,
            },
          
     
            select: {
                title: true,
                createData: true,
            },
     
    
        })
    res.json(user_one);
} catch (error) {
    res.json({error})

}
   
}



export const deleteOneblog = async (req: Request, res: Response) => {

    try {
        const  {id } = req.params
     
        let delete_one = await prisma.blog.delete({
            where: {
                id,
            },
          
     
        })
    res.json("The Blog has been deleted "+delete_one);
} catch (error) {
    res.json({error})

}
   
}




export const deleteAllblog = async (req: Request, res: Response) => {

    try {
        const  {id } = req.params
     
        let delete_all = await prisma.blog.deleteMany({
            where: {
                id,
            },
          
     
        })
    res.json("The Blogs has been deleted "+delete_all);
} catch (error) {
    res.json({error})

}
   
}








export default router;