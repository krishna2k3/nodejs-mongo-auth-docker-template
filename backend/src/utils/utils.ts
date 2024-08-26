import fs from "fs";
import path from "path";

export const getMongoURIConnectionString = () => {
  if (process.env.MONGODB_URI) {
    return process.env.MONGODB_URI;
  } else {
    throw new Error("No MONGO_URI env found");
  }
};

export const getJWTToken = () => {
  if (process.env.JWT_SECRET) {
    return process.env.JWT_SECRET;
  } else {
    throw new Error("No JWT_SECRET env found");
  }
};

export const makeDir = (name: string) => {
  const uploadDir = path.join(__dirname, "..", "..", name);
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
};

