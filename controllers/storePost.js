const Post = require('../database/models/Post')

module.exports = (req, res) => {
  Post.create(inp, (error, post) => {
    res.redirect('/')
  });
}