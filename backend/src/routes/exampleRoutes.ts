import { Router } from "express";
const router = Router();
// import { getExamples, createExample } from '@controllers/exampleController';
import { getExamples, createExample } from "@/controllers/exampleController";

// Define your routes
router.get("/", getExamples);
router.post("/", createExample);
// Add more routes as needed

export default router;
