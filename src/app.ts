import express from "express";
import urlRoutes from "./routes/urlRoutes";

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/api/url", urlRoutes);

export default app;
