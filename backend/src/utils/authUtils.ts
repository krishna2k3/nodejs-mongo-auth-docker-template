import { Response } from "express";
import jwt from "jsonwebtoken";
import { getJWTToken } from "./utils";

const generateToken = (res: Response, userId: string) => {
  const token = jwt.sign({ userId: userId }, getJWTToken(), {
    expiresIn: "30d",
    audience: "userId",
  });

  //Set JWT as HTTP-Only cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 Days
  });
};

export { generateToken };
