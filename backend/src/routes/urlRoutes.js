import express from "express";
import { createShortUrl, deleteUrl, getOriginalUrl, getUrlStats, updateUrl } from "../controllers/urlController.js";
import { validateUrl } from "../middlewares/validators.js";
// import { createShortUrl, getOriginalUrl, updateUrl, deleteUrl, getUrlStats } from "../controllers/urlController.js";

const router = express.Router();

router.post("/shorten", validateUrl, createShortUrl);

router.get("/shorten/:shortCode", getOriginalUrl);

router.put("/shorten/:shortCode", validateUrl, updateUrl);

router.delete("/shorten/:shortCode", deleteUrl);

router.get("/shorten/:shortCode/stats", getUrlStats);

export default router;
