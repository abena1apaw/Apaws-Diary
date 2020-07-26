const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const users = require("./routes/api/users");
const blogs = require("./routes/api/blogs");
const app = express();
const blogRoutes = express.Router();
// Bodyparser middleware
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


   blogRoutes.route("/").get(function (req, res) {
  Blog.find(function (err, blogs) {
  if (err) {
  console.log(err);
      } else {
  res.json(blogs);
      }
    });
  });
   
  blogRoutes.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Blog.findById(id, function (err, blog) {
  res.json(blog);
    });
  });
   
  blogRoutes.route("/add").post(function (req, res) {
  let blog = new Blog(req.body);
  blog
      .save()
      .then((blog) => {
  res.status(200).json({ blog:"blog added successfully" });
      })
      .catch((err) => {
  res.status(400).send("adding new blog failed");
      });
  });
   
  blogRoutes.route("/update/:id").post(function (req, res) {
  Blog.findById(req.params.id, function (err, blog) {
  if (!blog) res.status(404).send("data is not found");
  else blog.blog_title = req.body.blog_title;
  blog.blog_author = req.body.blog_author;
  blog.blog_content = req.body.blog_content;
  blog.blog_category = req.body.blog_category;
   
  blog
        .save()
        .then((blog) => {
         res.json("Blog updated");
        })
        .catch((err) => {
         res.status(400).send("Update not possible");
        });
    });
  }); 
  
  
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/blogs", blogs);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));