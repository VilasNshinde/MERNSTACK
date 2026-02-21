
import express from "express"

import {create,getAllUser,getUserById,Update,deleteUser} from "../controller/userController.js"


const route = express.Router();

route.post("/user",create)
route.get("/user",getAllUser)
route.get("/user/:id",getUserById)
route.put("/update/user/:id", Update);
route.delete("/delete/user/:id",deleteUser);


export default route;