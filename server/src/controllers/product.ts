import { Request, Response } from "express";


export const createProduct = async (req: Request, res: Response) => {
    try {
      res.status(200).json({ message: "Product created successfully" });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const getAllProducts = async (req: Request, res: Response) => {
    try {
      res.status(200).json({ message: "All products fetched successfully" });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const getProductById = async (req: Request, res: Response) => {
    try {
      res.status(200).json({ message: "Product fetched successfully" });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}



export const updateProduct = async (req: Request, res: Response) => {
    try {
      res.status(200).json({ message: "Product updated successfully" });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}



export const deleteProduct = async (req: Request, res: Response) => {
    try {
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

