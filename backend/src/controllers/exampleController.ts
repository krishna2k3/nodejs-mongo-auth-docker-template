// Import any required services or models here
import { Request, Response } from "express";
import * as exampleService from "@/services/exampleService";

// Define your controller methods
export const getExamples = async (req: Request, res: Response) => {
  try {
    const examples = await exampleService.getExamples();
    res.json({ markdown: examples });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createExample = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const newExample = await exampleService.createExample(name);
    res.json(newExample);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
