const Post = require('../database/models/Post')

module.exports = (req, res) => {
  var a = req.body;
  var email = a.email;
  Post.create(email, (error, post) => {
    res.redirect('/')
  });
}