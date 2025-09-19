import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import pool from "../connections/connection";
import { generateToken } from "../utils/jwt";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await pool.query(
      "SELECT id, username, email, programs, semester, role FROM teachers"
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "SELECT id, username, email, programs, semester, role FROM teachers WHERE id = $1",
      [id]
    );

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

export const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, email, password, programs, semester, role } = req.body;

    const existingUser = await pool.query("SELECT * FROM teachers WHERE email = $1", [email]);
    if (existingUser.rows.length > 0) {
      res.status(400).json({ error: "User already exists" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await pool.query(
      `INSERT INTO teachers (username, email, password, programs, semester, role, createdat)
       VALUES ($1, $2, $3, $4, $5, $6, NOW())
       RETURNING id, username, email, programs, semester, role`,
      [username, email, hashedPassword, programs, semester, role || "teacher"]
    );

    res.status(201).json({ message: "User registered successfully", user: newUser.rows[0] });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const signIn = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const result = await pool.query("SELECT * FROM teachers WHERE email = $1", [email]);
    if (result.rows.length === 0) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }

    const user = result.rows[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }

    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    delete user.password;

    res.status(200).json({
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    console.error("Signin error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};