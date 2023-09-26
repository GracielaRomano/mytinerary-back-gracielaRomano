import Comment from "../models/Comment.js";

const checkUserDeleteComment = async (req, res, next) => {
  try {
    let commentId = req.params.comment_id;
    let userId = req.user._id;

    let commentUser = await Comment.findById(commentId);

    if (!commentUser) {
      return res.status(404).json({
        success: false,
        message: "Comment not found",
        response: null,
      });
    }

    if (commentUser.user_id.toString() !== userId.toString()) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to delete this comment",
        response: null,
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};

export default checkUserDeleteComment;

