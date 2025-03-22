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

export const getOriginalUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;

    const urlEntry = await Url.findOne({ shortCode });

    if (!urlEntry) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    urlEntry.accessCount += 1;
    urlEntry.updatedAt = Date.now();
    await urlEntry.save();

    return res.status(200).json({ url: urlEntry.url });
  } catch (error) {
    console.error("Error retrieving original URL:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "New URL is required" });
    }

    const urlEntry = await Url.findOne({ shortCode });

    if(!urlEntry) {
      return res.status(404).json({ error: "URL not found" });
    }

    urlEntry.url = url;
    urlEntry.updatedAt = Date.now();
    await urlEntry.save();

    return res.status(200).json({
      message: "URL updated successfully",
      updatedUrl: urlEntry,
    });
  } catch (error) {
    console.error("Error updating Short URL:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;

    const urlEntry = await Url.findOneAndDelete({ shortCode });

    if (!urlEntry) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    return res.status(200).json({ message: "Short URL deleted successfully" });
  } catch (error) {
    console.error("Error deleting short URL:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getUrlStats = async (req, res) => {
  try {
    const { shortCode } = req.params;

    const urlEntry = await Url.findOne({ shortCode });

    if (!urlEntry) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    return res.status(200).json({ urlEntry });
  } catch (error) {
    console.error("Error fetching URL stats:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};