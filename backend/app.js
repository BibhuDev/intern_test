import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";
import authorizeRoles from "./middleware/roleMiddleware.js";
import taskRoutes from "./routes/taskRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use("/api/v1/auth", authRoutes);
app.use(errorHandler);


app.get("/api/v1/protected", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user
  });
});

app.get("/api/v1/user", authMiddleware, (req, res) => {
  res.json({ message: "User access granted" });
});

app.get(
  "/api/v1/admin",
  authMiddleware,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({ message: "Admin access granted" });
  }
);

app.use("/api/v1/tasks", taskRoutes);



app.get("/", (req, res) => {
  res.send("API running...");
});

export default app;