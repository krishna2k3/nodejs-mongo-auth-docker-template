import "module-alias/register";
import dotenv from "dotenv";
dotenv.config();
import express, { json, Request, Response, urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { port } from "@/config/config";
import connectDB from "@/config/db";
import exampleRoutes from "@/routes/exampleRoutes";
import userRoutes from "@/routes/userRoutes";

connectDB();
const app = express();

// CORS options
const corsOptions = {
  origin: "http://localhost:3000", // Frontend port
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/example", exampleRoutes);
app.use("/api/users", userRoutes);

// Define a route for the root path ('/')
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Node.js + Express!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
