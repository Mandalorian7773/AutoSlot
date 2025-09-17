import express, { Application } from "express";
import dotenv from "dotenv";
import pool from "../connections/connection";
import userRouter from "../routers/user.routes";

dotenv.config();

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || "3000", 10);

app.use(express.json());

app.use("/users", userRouter);

pool.connect();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

export default app;