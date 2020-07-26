const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");



const Blog = require("../../models/Blog");

router.post("/blog", (req, res) => {
         const newBlog = new Blog({
          title: req.body.title,
          author: req.body.author,
          content: req.body.content,
           category: req.body.category
        });       
      
     Blog.create(newBlog)
     .then(function(dbBlog) {
       //view the added results in the console
       console.log(dbBlog);
       res.json(dbBlog);
     })
     .catch(function(err) {
       
       console.log(err)
     })
    })

    router.get("/blog/:id", (req, res) => {
     
             
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
