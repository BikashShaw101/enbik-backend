import express from "express";
const router = express.Router();
import { createPost } from "../controllers/postController";
import { authGuard, adminGuard } from "../middleware/authMiddleware";

router.post("/", authGuard, adminGuard, createPost);

export default router;
