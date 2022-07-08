import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("Hello user You are logged In.")
// })
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user You are logged In and you can delete account.");
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello user You are an admin and you can delete all accounts.");
// });

//update
router.put("/:id",verifyUser,updateUser);

//delete
router.delete("/:id", verifyUser, deleteUser);

//get
router.get("/:id", verifyUser, getUser);

//getAll
router.get("/", verifyAdmin, getUsers);

export default router;
