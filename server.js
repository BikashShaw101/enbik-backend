import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";

// Routes
import userRoutes from "./routes/userRoutes";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

// first Url { Home }
app.get("/", (req, resp) => {
  resp.send("Server is running...");
});

// Second Url
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
