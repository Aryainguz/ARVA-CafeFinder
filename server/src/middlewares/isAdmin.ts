import { NextFunction, Request, Response } from "express";
import { Admin } from "../models/admin";

export const isAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const admin = await Admin.findById(token);

  if (!admin) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};
