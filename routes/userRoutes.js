import express from "express";
const router = express.Router();
import { registerUser } from "../controllers/userController";

router.post("/register", registerUser);

export default router;
