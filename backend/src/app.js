import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// Core middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: true,
		credentials: true,
	})
);

// Health check
app.get("/health", (req, res) => {
	res.status(200).json({ status: "OK" });
});

export default app;
