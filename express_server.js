// Setup
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const app = express();
const cookieParser = require('cookie-parser');
const PORT = 8080;
app.set('view engine', 'ejs');

// Middlewware
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cookieParser());


// Routes
const urlsRouter = require('./routes/urls');
const login = require('./routes/login');
const logout = require('./routes/logout');
app.use('/', urlsRouter);
app.use('/login', login);
app.use('/logout', logout);

// Starting the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});