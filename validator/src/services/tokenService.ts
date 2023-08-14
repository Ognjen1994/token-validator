import { validateToken } from "../utils/tokenValidator";

export const validateTokenService = (token: string) => {
  return validateToken(token);
};
