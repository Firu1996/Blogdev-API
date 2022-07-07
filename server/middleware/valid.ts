import { Request, Response, NextFunction, response } from "express";

export const validRegister = async (req: Request, res: Response, next: NextFunction) => {
  const { name, account, password } = req.body;
  if (!name) {
    return res.status(400).json({
      success: false,
      msg: "Please add your name."
    });
  } else if (name.length > 20) {
    return res.status(400).json({
      success: false,
      msg: "Your name is too long."
    });
  }

  if (!account) {
    return res.status(400).json({
      success: false,
      msg: "Please add your email or phone number."
    });
  } else if (!validPhone(account) && !validateEmail(account)) {
    return res.status(400).json({
      success: false,
      msg: "Email or phone number format is incorrect."
    });
  }

  if (password.length < 8) {
    return res.status(400).json({
      success: false,
      msg: "Password must be at least 8 chars."
    });
  }

  next();
};

function validPhone(phone: string) {
  const re = /^[+]/g;
  return re.test(phone);
}

function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
