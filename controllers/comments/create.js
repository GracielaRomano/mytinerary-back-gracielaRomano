import Comment from "../../models/Comment.js";

export default async (req, res, next) => {
  try {
    req.body.user_id = req.user._id;
    let one = await Comment.create(req.body);
    return res.status(201).json({
      success: true,
      message: "comment created",
      comment_id: one._id,
      response: one.text,
    });
  } catch (error) {
    next(error);
  }
};