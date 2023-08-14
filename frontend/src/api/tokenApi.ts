import { BASE_URL } from "@/utils/constants";
import axios from "axios";

export const validateToken = async (generatedToken: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/validate/${generatedToken}`);
    const data = response.data;
    return data.isValid;
  } catch (error) {
    console.error("Error validating token:", error);
    throw error;
  }
};
