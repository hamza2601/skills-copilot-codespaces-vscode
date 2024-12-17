// Create web server 
// Create a form with a textarea for comments
// Create a submit button
// When the form is submitted, display the comments in a list
// Use the fs module to store the comments in a file

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'comments.html');
    const parsedUrl = url.parse(req.url, true);
    const comments = parsedUrl.query.comments;

    if (req.url === '/comments' && req.method ===
