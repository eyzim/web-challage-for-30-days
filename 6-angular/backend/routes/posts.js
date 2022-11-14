const express = require('express');
const { modelName } = require('../models/post');
const Post = require('../models/post')

const router = express.Router()

// get the posts
router.get("", (req, res, next) => {
    const posts = [
        {
            id: "54786454",
            title: "第一天",
            content: "白蘭地"
        },
        {
            id: "59878922",
            title: "第二天",
            content: "雞湯火鍋"
        }
    ]

    res.status(200).json({
        message: 'Post fetched successfully :)',
        posts: posts
    })
})

router.post("", (req, res, next) => {
    const post = new Post({
      title: req.body.title,
      content: req.body.content
    });
    console.log(post);
    console.log(post._id.toString())
    res.status(201).json({
      message: 'Post added successfully'
    });
});


module.exports = router
