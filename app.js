const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const to_json = require('xmljson').to_json;
let userName = [];
let studentID = "";
let PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.render('login');
});

app.get('/profile', (req, res) => {
    res.render('profile', {fullName: userName,SID: studentID});
});

app.post('/login', (req, res) => {
    // Secret Code for Login
});

app.listen(PORT, () => {
    console.log('Server started at localhost:3000');
});
