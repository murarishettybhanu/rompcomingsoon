const Post = require('../database/models/Post')

module.exports = (req, res) => {
  console.log('hii');
  var a = req.body;
  var email = a.email;
  console.log(email);
  Post.create(email, (error, post) => {
    res.redirect('/')
  });
}