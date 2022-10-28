const { query } = require('express');
const express = require('express');

const app = express();

// after we run, access http://localhost:3000/ from browser
// uncomment each part and have fun
app.listen(3000, () => {
    console.log("port 3000 :)");
})

// 1. route all the page to the same request/view
// access http://localhost:3000/asdfg from browser
// app.use((req, res) => {
//     console.log("hello, I myself sent a request to port 3000");
//     res.send("<h2>Welcome to my page</h2><p>You've gotten the first response which sent by me.</p>")    
// })




// 2. route one request to pre-defined pages/subpages
// access http://localhost:3000/monday from browser
// app.get('/', (req, res) => {
//     console.log("I myself sent a request to homepage of port 3000");
//     res.send("Ask a day for work :)");
// })

// app.get('/monday', (req, res) => {
//     console.log("Monday request on port 3000");
//     res.send("<h2>Blue Monday</h2>")
// })

// app.get('/saturday', (req, res) => {
//     console.log("Saturday request on port 3000");
//     res.send("<h2>Rainbow Saturday</h2>")
// })

// // for any other undefined days
// app.get('*', (req, res) => {
//     res.send("Maybe, you can get another day?");
// })

// app.post("*", (req, res) => {
//     res.send("I've gotten a post request wow");
// })




// 3. route to the var path of requests
//    access page of http://localhost:3000/page/dog/9487
// app.get('/', (req, res) => {
//     console.log("I myself sent a request to homepage of port 3000");
//     res.send("Ask a day for work :)")
// })

// // app.get('/page/:subpage', (req, res) =>{
// //     const {subpage} = req.params;
// //     res.send(`Welcome to page : ${subpage}`);
// //     console.log(req.params);
// // })

// app.get('/page/:subpage/:postid', (req, res) =>{
//     const {subpage, postid} = req.params;
//     res.send(`The post ${postid} on the page ${subpage} is funny`);
//     console.log(req.params);
// })

// app.get('*', (req, res) => {
//     res.send("Maybe, you can get another day?");
// })

// app.post("*", (req, res) => {
//     res.send("I've gotten a post request wow");
// })





// 4. route the page by query
//    access page of http://localhost:3000/search?q=dog
// app.get('/', (req, res) => {
//     console.log("I myself sent a request to homepage of port 3000");
//     res.send("Ask a day for work :)")
// })

// app.get('/page/:subpage/:postid', (req, res) =>{
//     const {subpage, postid} = req.params;
//     res.send(`The post ${postid} on the page ${subpage} is funny`);
//     console.log(req.params);
// })

// app.get('/search', (req, res) => {
//     const {q} = req.query;
//     console.log(req.query);
//     if( !q )
//     {
//         res.send(`bad news, not found of ${q}`);
//     }
//     res.send(`<h2>Here are some results of ${q}</h2>`);
// })

// app.get('*', (req, res) => {
//     res.send("Maybe, you can get another day?");
// })

// app.post("*", (req, res) => {
//     res.send("I've gotten a post request wow");
// })