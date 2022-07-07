import { Request, Response } from "express";
import userModel from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateActiveToken, generateAccessToken, generateRefreshToken } from "../config/generateToken";

const authController = {
  register: async (req: Request, res: Response) => {
    try {
      const { name, account, password } = req.body;

      const user = await userModel.find({ account });
      if (user && user.length) {
        return res.status(400).json({
          success: false,
          msg: "Email of Phone number already exists."
        });
      }

      const passwordHash = await bcrypt.hash(password, 12);

      const newUser = new userModel({
        name,
        account,
        password: passwordHash
      });

      const active_token = generateActiveToken(newUser);

      await newUser.save();
      res.json({
        success: true,
        msg: "Register successfully",
        data: newUser,
        active_token
      });
    } catch (err: any) {
      return res.status(500).json({
        msg: err.message
      });
    }
  }
};

export default authController;
