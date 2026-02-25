const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
// create a new express application
const app = express();

//render files by engine - .hbs files should be operated by hbs engine (Handlebars)
app.engine('.hbs', hbs());
//we use the views that have .hbs
app.set('view engine', '.hbs');

// app.use((req, res, next) => {
//   res.show = (name) => {
//     res.sendFile(path.join(__dirname, `/views/${name}`));
//   };
//   ``;
//   next();
// });

//add function that shares folders (in my example it's public) - this function is operating all necessary endpoints
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/hello/:name', (req, res) => {
  res.render('hello', { layout: false, name: req.params.name });
});

app.get('/about', (req, res) => {
  res.render('about', { layout: 'dark' });
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/info', (req, res) => {
  res.render('info');
});

app.get('/history', (req, res) => {
  res.render('history');
});

app.use((req, res) => {
  res.status(404).send('404 not found...');
});

// create an HTTP server on port no 8000
app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
