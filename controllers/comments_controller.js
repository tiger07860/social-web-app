const Comment = require("../models/comment");
const Post = require("../models/post");

module.exports.create = async function (req, res) {
  try {
    const post = await Post.findById(req.body.post);

    if (post) {
      const comment = await Comment.create({
        content: req.body.content,
        post: req.body.post,
        user: req.user._id,
      });

      post.comments.push(comment);
      post.save();

      if (req.xhr) {
        return res.status(200).json({
          data: {
            comment: comment,
          },
          message: "Comment Created!!",
        });
      }

      req.flash("success", "Comment published!!");

      return res.redirect("/");
    }
  } catch (err) {
    req.flash("error", err);
    return res.redirect("/");
  }
};

module.exports.delete = async function (req, res) {
  try {
    const comment = await Comment.findById(req.params.id);

    if (comment.user == req.user.id) {
      let postId = comment.post;
      comment.remove();

      const post = await Post.findByIdAndUpdate(postId, {
        $pull: { comments: req.params.id },
      });

      if (req.xhr) {
        return res.status(200).json({
          data: {
            comment_id: req.params.id,
          },
          message: "Comment deleted",
        });
      }
    }
    req.flash("success", "Comments deleted!");
    return res.redirect("back");
  } catch (err) {
    req.flash("error", err);
    return res.redirect("back");
  }
};
