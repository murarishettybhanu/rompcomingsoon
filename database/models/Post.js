const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  email: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post
