import { Schema, model, Document } from "mongoose";

export type Program = "B.Ed." | "M.Ed." | "FYUP" | "ITEP";
export type Semester = "1st" | "2nd" | "3rd" | "4th" | "5th" | "6th";
export type Role = "superadmin" | "teacher" | "HOD";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  programs: Program;
  semester: Semester;
  role: Role;
  createdAt: Date;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  programs: { type: String, enum: ["B.Ed.", "M.Ed.", "FYUP", "ITEP"], required: true },
  semester: { type: String, enum: ["1st", "2nd", "3rd", "4th", "5th", "6th"], required: true },
  role: { type: String, enum: ["superadmin", "teacher", "HOD"], default: "teacher" },
  createdAt: { type: Date, default: Date.now },
});

const User = model<IUser>("User", userSchema);

export default User;
