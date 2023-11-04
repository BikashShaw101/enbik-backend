import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db";
import {
  errorResponserHandler,
  invalidPathHandler,
} from "./middleware/errorHandler";

// Routes
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";
import commentRoutes from "./routes/commentRoutes";


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

// api url
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use(cors(
  { credentials: true, origin: "https://enbikblog.netlify.app/" }
));

// static assests
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Error Handler
app.use(invalidPathHandler);
app.use(errorResponserHandler);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
