const Post = require('../database/models/Post')

module.exports = (req, res) => {
  Post.create(req.body, (error, post) => {
    if(error){
      return res.status(400).json({ message: err.message });    
    }
    res.text(post)
  });
}