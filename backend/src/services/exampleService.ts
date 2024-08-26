// Import any required models here
import { gpt } from "@/lib/gpt";
import Example from "@/models/exampleModel";
import { unescapeMarkDownString } from "@/utils/utils";
import { readFileSync } from "fs";

// Define your service methods
export const getExamples = async () => {
  const filePath =
    "/home/krishnamurthyravi/Documents/video2blog-main/backend/uploads/66acc85265ece4fe408056b0_transcript_serial.txt";
  const prompt =
    "Convert this transcript into a blog in mark down format and send only that as a response.";

  const content = await readFileSync(filePath, "utf-8");
  const response = await gpt(prompt, content);
  if(response.message.content){
    const md = await unescapeMarkDownString(response.message.content);
    return md;
  } else {
    return ""
  }
};

export const createExample = async (name: string) => {
  const example = new Example({ name });
  return await example.save();
};
