import { getallUsers,createUser, getOneUser } from '../controller/user.controller';
import express from "express";
let router= express.Router();


// Get all blog
router.get('/', getallUsers)
// Get One User
router.get('/:id', getOneUser)
//POST Creat
router.post('/',createUser )
// Update
// router.put('/:id',updateUser );
//Delete
// router.delete('/:id',deleteUser);


export default router;