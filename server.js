const express = require('express');
const path = require('path');

// create a new express application
const app = express();

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };
  next();
});

app.get('/', (req, res) => {
  res.show('index.html');
});

app.get('/about', (req, res) => {
  res.show('about.html');
});

app.get('/contact', (req, res) => {
  res.show('contact.html');
});

app.get('/info', (req, res) => {
  res.show('info.html');
});

app.get('/history', (req, res) => {
  res.show('history.html');
});

// create an HTTP server on port no 8000
app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
