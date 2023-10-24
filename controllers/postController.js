import { uploadPicture } from "../middleware/uploadPictureMiddleware";
import Post from "../models/Post";
import { fileRemover } from "../utils/fileRemover";
import { v4 as uuidv4 } from "uuid";

const createPost = async (req, res, next) => {
  try {
    const post = new Post({
      title: "Sample title",
      caption: "Sample caption",
      slug: uuidv4(),
      body: {
        type: "doc",
        content: [],
      },
      photo:"",
      user: req.user._id,
    });
  } catch (error) {
    next(error);
  }
};

export { createPost };
