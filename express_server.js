// Setup
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const app = express();
const PORT = 8080;
app.set('view engine', 'ejs');

// Middlewware
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
const urlsRouter = require('./routes/urls');
app.use('/', urlsRouter);

// Starting the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});