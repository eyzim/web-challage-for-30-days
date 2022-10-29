const { application } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const sampleData = require('./data.json');
// console.log (sampleData);

// Setup absolute path for ejs rendering views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

// Setup absolute path for public assets
app.use(express.static(path.join(__dirname, 'public')))

// access to http://localhost:3000/
app.get('/', (req, res) => {
    //res.send("hi my friend :)")
    res.render('home');
})

// access to http://localhost:3000/page/chickens
app.get('/page/:subpage', (req,res) => {
    const {subpage} = req.params;
    const data = sampleData[subpage];

    // console.log(data);
    // res.render('subpage', {subpage});

    if(data)
    {
        res.render('subpage', {...data});
    }
    else
    {
        res.send("Maybe, you can get another one?");
    }
})

// access to http://localhost:3000/days
app.get('/days', (req, res) => {
    const days = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
    ];
    res.render('days', {allDays: days});
})

// access to http://localhost:3000/rnd
app.get('/rnd', (req, res) => {
    const num = Math.floor(Math.random()*10);
    res.render('random', {num});
})

// Handle words we havent defined
app.get('*', (req, res) => {
    res.send("Maybe, you can get another page?");
})

app.listen(3000, ()=>{
    console.log("I hear you on port 3000");
})