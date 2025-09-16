import { Router } from "express";
import { getAllUsers, getUserById, signIn } from "../controllers/user.controller";

const userRouter: Router = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/signin", signIn);

export default userRouter;
