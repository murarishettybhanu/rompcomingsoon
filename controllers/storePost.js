const Post = require('../database/models/Post')

module.exports = (req, res) => {
  console.log("hii")
  var a = req.body;
  var inp = a[0];
  console.log(inp);
  Post.create(inp, (error, post) => {

  });
}