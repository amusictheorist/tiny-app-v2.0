// Helper functions to run TinyApp and express_server.js

const generateRandomString = function() {
  let result = Math.random().toString(36).slice(2);
  return result;
};

const findUserByEmail = function(email, users) {
  return Object.values(users).find(user => user.email === email) || null;
};

module.exports = { generateRandomString, findUserByEmail };