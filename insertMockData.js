// const User = require('./models/User');
// const URL = require('./models/URL');
// const sequelize = require('./db');

// const mockUsers = [
//   {id: 'user1', email: 'a@a.com', password: 'asdf'},
//   {id: 'user2', email: 'b@b.com', password: 'qwer'},
//   {id: 'user3', email: 'c@c.com', password: 'zxcv'}
// ];

// const mockURLs = [
//   {id: 'url1', shortURL: 'b2xVn2', longURL: 'http://www.lighthouselabs.ca'},
//   {id: 'url2', shortURL: '9sm5xK', longURL: 'http://www.google.com'}
// ];

// async function insertUsers() {
//   for (const userData of mockUsers) {
//     await User.create(userData);
//   }
// };

// async function insertURLs() {
//   for (const urlData of mockURLs) {
//     await URL.create(urlData);
//   }
// };

// async function insertMockData() {
//   try {
//     await sequelize.sync({ force: true });
//     console.log('Database synced!');

//     await insertUsers();
//     await insertURLs();

//     console.log('Mock data inserted!');
//   } catch (error) {
//     console.error('Error inserting mock data', error);
//   }
// };

// insertMockData();