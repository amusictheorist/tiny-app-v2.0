// helper functions to run TinyApp and express_server.js

function generateRandomString() {
  let result = Math.random().toString(36).slice(2);
  return result;
};

module.exports = { generateRandomString };