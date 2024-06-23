import { Request, Response } from "express";
import { Admin } from "../models/admin";

export const createAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.create({ email, password });
    res.status(201).json(admin);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllAdmins = async (req: Request, res: Response) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const loginAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    if (admin.password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.status(200).json(admin);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
