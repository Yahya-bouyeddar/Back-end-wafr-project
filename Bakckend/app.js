import express from "express";
import userRoutes from "./routes/userRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import authRoutes from "./routes/authRoutes.js";

import cors from "cors";
import { verifyToken } from "./middlewares/authMiddleware.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/users",verifyToken, userRoutes);
app.use("/api/transactions",verifyToken, transactionRoutes);

app.get("/", (req, res) => {
  res.send("Bienvenue sur le Backend WafR 🚀");
});

export default app;
