import express from "express";
import { createShortUrl } from "../controllers/createShortUrl";
import { getOriginalUrl } from "../controllers/getOriginalUrl";

const router = express.Router();

router.post("/shorten", createShortUrl);
router.get("/original", getOriginalUrl);

export default router;
