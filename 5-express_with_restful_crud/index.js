const exp = require('constants');
const { application } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const { v4 : uuid } = require('uuid');
const methodOverride = require('method-override')

// Setup absolute path for ejs rendering views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

// Setup absolute path for public assets
app.use(express.static(path.join(__dirname, 'public')))

// Ask express to parse the request body
app.use(express.urlencoded({extended: true}));
// Ask express to parse the request body of json
app.use(express.json());

app.use(methodOverride('_method'));

let comments = [
    {
        id: uuid(),
        username: 'Winnie',
        comment: 'I\'m hungry'
    },
    {
        id: uuid(),
        username: 'Pooh',
        comment: 'there\'s honey wow'
    },
    {
        id: uuid(),
        username: 'Moon',
        comment: 'Time for lunch'
    },
    {
        id: uuid(),
        username: 'Grey',
        comment: 'raining now'
    }
]

// access to http://localhost:3000/
app.get('/', (req, res) => {
    // res.send("hi my friend :)")
    res.render('home');
})

// get all the comments
app.get('/comments', (req, res) => {
    // res.send("get comments");
    res.render('comments/index', {comments});
})

// get the 'add comment' page
app.get("/comments/new", (req, res) => {
    res.render('comments/new');
})

// post new comment and jump to comment page to watch
app.post("/comments", (req, res) => {
    const {username, comment} = req.body;
    comments.push({id:uuid(), username, comment});
    res.redirect('/comments')
})

// get one of the post of specific id
app.get("/comments/:id", (req, res) => {
    const {id} = req.params;
    const findid = comments.find(c => c.id === id);
    
    res.render('comments/of', {comments: findid});
})

// get one of the post of specific id to edit
app.get("/comments/:id/edit", (req, res) => {
    const {id} = req.params;
    const findid = comments.find(c => c.id === id);
    
    res.render('comments/edit', {comments: findid});
})

// edit the post of specific id
app.patch("/comments/:id", (req, res) => {
    const {id} = req.params;
    const foundComment = comments.find(c => c.id === id);
    
    const editedComment = req.body.comment;
    foundComment.comment = editedComment;
    res.redirect('/comments');
})

app.delete("/comments/:id", (req, res) => {
    const {id} = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})


// app.get('/food', (req, res) => {
//     const str = "Here is your menu.";
//     // res.render('food', {str});
//     console.log(req.body);
//     res.send("get successfully");
// })

// app.post('/food', (req, res) => {
//     const str = "I've get your order."
//     const {meal, qty} = req.body;
//     console.log(req.body);
//     // res.render('food', {str});
//     res.send(`post successfully, ${qty} ${meal}s`);
// })

// Handle words we havent defined
app.get('*', (req, res) => {
    res.render('notfound');
})

app.listen(3000, () => {
    console.log("i'm listening, surprise LOL");
})