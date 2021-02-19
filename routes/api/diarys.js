const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// // Load Diary model
const Diary = require("../../models/Diary");
// @route POST api/diarys/create
// @desc Create post
// @access Public
router.post("/diary", (req, res) => {
         const newDiary = new Diary({
          title: req.body.title,
          author: req.body.author,
          content: req.body.content,
           category: req.body.category
        });       
      
     //Create New diary
     Diary.create(newDiary)
     .then(function(dbDiary) {
       //view the added results in the console
       console.log(dbDiary);
       res.json(dbDiary);
     })
     .catch(function(err) {
       //if an error occurred then log it
       console.log(err)
     })
    })

    router.get("/diary/:id", (req, res) => {
      // Use Mongoose to get the diary by the id
      diary.findOne({ _id: req.params.id })
          .then(function(dbDiary) {
              res.json(dbDiary);
          })
          .catch(function(err) {
             console.log(err);
             res.json(err);
          });
  })
  module.exports = router;