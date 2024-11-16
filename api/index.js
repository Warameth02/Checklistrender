const express = require('express');
const app = express();
const path = require("path");

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/comparison', (req, res) => {
    res.render('comparison')
});

// สร้าง handler สำหรับ Vercel serverless function
module.exports = (req, res) => {
    app(req, res);
};