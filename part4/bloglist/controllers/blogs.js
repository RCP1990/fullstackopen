const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs.map(blog => blog.toJSON()))
      })
  })
  
  blogRouter.post('/', (request, response) => { 
    const body = request.body
  
    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes
  })

    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      })
      .catch((error) => {
      if (error.name === 'ValidationError') {
        response.status(400).json({ error: error.message });
      } else {
        next(error);
      }
    });
  })

  module.exports = blogRouter