import Url from "../models/Url.js";

export const createShortUrl = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    const newUrl = await Url.create({ url });

    return res.status(201).json(newUrl);
  } catch (error) {
    console.error("Error creating short URL:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};