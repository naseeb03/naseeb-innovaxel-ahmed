import mongoose from "mongoose";
import { nanoid } from "nanoid";

const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortCode: {
    type: String,
    unique: true,
    default: () => nanoid(6),
  },
  accessCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Url = mongoose.model("Url", urlSchema);
export default Url;