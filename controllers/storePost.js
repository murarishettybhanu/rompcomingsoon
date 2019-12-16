const Post = require('../database/models/Post')

module.exports = (req, res) => {

    Post.create(req.body , (error, post) => {
      res.status(200);
      res.end();
    });
}