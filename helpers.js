// helper functions to run TinyApp and express_server.js

function generateRandomString() {
  let result = Math.random().toString(36).slice(2);
  return result;
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

module.exports = { generateRandomString, urlDatabase, users };