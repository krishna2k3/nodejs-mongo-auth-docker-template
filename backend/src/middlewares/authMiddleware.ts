import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import User, { IUser } from "@/models/userModel";

const protect = async (req: Request, res: Response, next: NextFunction) => {
  let token: string | undefined;


  token = req.cookies?.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
        userId: string;
      };

      const user = (await User.findById(decoded.userId).select(
        "-password"
      )) as IUser | null;

      if (!user) {
        res.status(401).send("Not authorized, user not found");
        return;
      }

      req.user = user;
      next();
    } catch (error) {
      console.error(error);
      res.status(401).send("Not authorized, token failed");
    }
  } else {
    res.status(401).send("Not authorized, no token");
  }
};

export { protect };
