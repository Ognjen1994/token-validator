import { validateTokenService } from "../services/tokenService";
import { Request, Response } from "express";

export const validateTokenController = (req: Request, res: Response) => {
  const { token } = req.params;
  const isValid = validateTokenService(token);
  res.json({ isValid });
};
