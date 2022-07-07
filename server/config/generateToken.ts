import jwt from "jsonwebtoken";

interface IPayload {
  name: string;
  account: string;
  password: string;
}

export const generateActiveToken = (payload: IPayload) => {
  return jwt.sign({ payload }, `${process.env.ACTIVE_TOKEN_SECRET}`, { expiresIn: "5m" });
};

export const generateAccessToken = (payload: IPayload) => {
  return jwt.sign({ payload }, `${process.env.ACCESS_TOKEN_SECRET}`, { expiresIn: "15m" });
};

export const generateRefreshToken = (payload: IPayload) => {
  return jwt.sign({ payload }, `${process.env.REFRESH_TOKEN_SECRET}`, { expiresIn: "30d" });
};
