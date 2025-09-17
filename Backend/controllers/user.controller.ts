import { Request, Response } from "express";
import pool from "../connections/connection";
import { generateToken } from "../utils/jwt";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await pool.query("SELECT id, username, email, programs, semester, role FROM teachers");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT id, username, email, programs, semester, role FROM teachers WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const signIn = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body;

    const result = await pool.query("SELECT id, username, email, role FROM teachers WHERE email = $1", [email]);

    if (result.rows.length === 0) {
      res.status(401).json({ error: "Invalid email" });
      return;
    }

    const teacher = result.rows[0];
    const token = generateToken({
      id: teacher.id,
      email: teacher.email,
      role: teacher.role,
    });

    res.status(200).json({
      message: "Login successful",
      token,
      teacher,
    });
  } catch (error) {
    console.error("Signin error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};