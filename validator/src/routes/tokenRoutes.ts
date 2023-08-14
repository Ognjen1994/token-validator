import express from "express";
import { validateTokenController } from "../controllers/tokenController";

const router = express.Router();

router.get("/validate/:token", validateTokenController);

export default router;
