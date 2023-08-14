import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import tokenRoutes from "./routes/tokenRoutes";
import { ORIGIN_URL, PORT, HttpMethod } from "./utils/constants";

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: ORIGIN_URL,
    methods: [HttpMethod.GET],
  })
);

app.use("/api", tokenRoutes);

app.listen(PORT, () => {
  console.log(`Validator Service is running on port ${PORT}`);
});
