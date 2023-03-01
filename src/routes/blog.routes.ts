import { getallBlog,createBlog, getOneblog, updateBlog, deleteOneblog, deleteAllblog } from '../controller/blog.contller';

import express from "express";
let router= express.Router();


// Get all users
router.get('/', getallBlog)
// Get One User
router.get('/:id',getOneblog )
//POST Creat
router.post('/',createBlog )
// Update
router.put('/:id',updateBlog);
//Delete
router.delete('/:id',deleteOneblog);
router.delete('/:id',deleteAllblog);


export default router;