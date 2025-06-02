const db = require("../models");
const { post, comment, save, user } = db;


const { Sequelize, sequelize } = require('../models');


//1. 특정 유저가 작성한 게시글
exports.getMyPosts = async (req, res) => {
  const { userId } = req.params;
  try {
    const posts = await post.findAll({
      where: { userId },
      order: [["date", "DESC"]],
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "사용자 게시글 조회 실패", error });
  }
};

// 2. 특정 유저가 작성한 댓글
exports.getMyComments = async (req, res) => {
  const { userId } = req.params;
  try {
    const comments = await comment.findAll({
      where: { userId },
      include: [
        {
          model: post,
          attributes: ["postId", "title"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: "사용자 댓글 조회 실패", error });
  }
};

// 3. 특정 유저가 저장한 게시글
exports.getSavedPosts = async (req, res) => {
  const { userId } = req.params;
  try {
    const savedPosts = await post.findAll({
      include: [
        {
          model: user,
          as: "users",
          through: { where: { userId } },
          attributes: [],
        },
      ],
    });
    res.json(savedPosts);
  } catch (error) {
    res.status(500).json({ message: "저장한 게시글 조회 실패", error });
  }
};
