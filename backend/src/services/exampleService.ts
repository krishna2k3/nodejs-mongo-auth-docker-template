// Import any required models here
import Example from "@/models/exampleModel";
import { readFileSync } from "fs";

// Define your service methods
export const getExamples = async () => {
  return await Example.find({});
};

export const createExample = async (name: string) => {
  const example = new Example({ name });
  return await example.save();
};
