import validator from "validator";

export const validateUrl = (req, res, next) => {
  const { url } = req.body;

  if (!url || !validator.isURL(url, { protocols: ["http", "https"], require_protocol: true })) {
    return res.status(400).json({ error: "Invalid URL. Ensure it starts with http:// or https://." });
  }

  next();
};