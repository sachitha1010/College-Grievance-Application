import { Router } from "express";
import { signup, login, verifyToken, getUser, refreshToken, logout } from "../controllers/user-controller.js";

const userrouter = Router();

userrouter.post("/signup", signup);
userrouter.post("/login", login);
userrouter.get("/user", verifyToken, getUser);
userrouter.get("/refresh", refreshToken, verifyToken, getUser);
userrouter.post("/logout", verifyToken, logout);
export default userrouter;