// Helper functions and mock data to run TinyApp and express_server.js

const generateRandomString = function() {
  let result = Math.random().toString(36).slice(2);
  return result;
};

const findUserByEmail = function(email, users) {
  return Object.values(users).find(user => user.email === email) || null;
};

// Mock Database
const urlDatabase = {
  b2xVn2: "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

// Mock users
const users = {
  'xarknlmie3i': {
    id: 'xarknlmie3i',
    email: 'a@a.com',
    password: 'asdf'
  },
  '4ruu71bhvyo': {
    id: '4ruu71bhvyo',
    email: 'b@b.com',
    password: 'qwer'
  },
  'x3yuka76ylk': {
    id: 'x3yuka76ylk',
    email: 'c@c.com',
    password: 'zxcv'
  }
};

module.exports = { generateRandomString, findUserByEmail, urlDatabase, users };