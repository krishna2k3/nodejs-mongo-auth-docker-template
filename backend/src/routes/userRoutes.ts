import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  updateUser,
  getUsers,
} from "@/controllers/userController.js";
import { protect } from "@/middlewares/authMiddleware";

const router = express.Router();

router.route("/").post(registerUser).get(protect, getUsers);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/:id").put(protect, updateUser);

export default router;
