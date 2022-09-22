import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      require: true,
      default: "Long",
    },
    attachment: String,
  },
  { timestamp: true }
);

export const PostModel = mongoose.model("Post", schema);
