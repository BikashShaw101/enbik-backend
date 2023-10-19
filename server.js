import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import {
  errorResponserHandler,
  invalidPathHandler,
} from "./middleware/errorHandler";

// Routes
import userRoutes from "./routes/userRoutes";

// dotenv configuration
dotenv.config();

// database connectivity
connectDB();

// Express configuration
const app = express();
app.use(express.json());

// first Url { Home }
app.get("/", (req, resp) => {
  resp.send("Server is running...");
});

// Second Url
app.use("/api/users", userRoutes);

// Error Handler
app.use(invalidPathHandler);
app.use(errorResponserHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
