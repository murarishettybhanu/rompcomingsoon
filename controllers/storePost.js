const Post = require('../database/models/Post')

module.exports = (req, res) => {
  console.log("hii")
  Post.create(req.body, (error, post) => {
  });
}