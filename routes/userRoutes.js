import express from "express";
const router = express.Router();
import {
  registerUser,
  loginUser,
  userProfile,
  updateProfile,
  updateProfilePicture,
} from "../controllers/userController";
import { authGuard } from "../middleware/authMiddleware";
// import { uploadPicture } from "../middleware/uploadPictureMiddleware";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authGuard, userProfile);
// we use put whn you update something
router.put("/updateProfile", authGuard, updateProfile);
router.put("/updateProfilePicture", authGuard, updateProfilePicture);

export default router;
