const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// // Load Blog model
const Blog = require("../../models/Blog");
// @route POST api/blogs/create
// @desc Create post
// @access Public
router.post("/blog", (req, res) => {
         const newBlog = new Blog({
          title: req.body.title,
          author: req.body.author,
          content: req.body.content,
           category: req.body.category
        });       
      
     //Create New blog
     Blog.create(newBlog)
     .then(function(dbBlog) {
       //view the added results in the console
       console.log(dbBlog);
       res.json(dbBlog);
     })
     .catch(function(err) {
       //if an error occurred then log it
       console.log(err)
     })
    })

    router.get("/blog/:id", (req, res) => {
      // Use Mongoose to get the blog by the id
      blog.findOne({ _id: req.params.id })
          .then(function(dbBlog) {
              res.json(dbBlog);
          })
          .catch(function(err) {
             console.log(err);
             res.json(err);
          });
  })
  module.exports = router;