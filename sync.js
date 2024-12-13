const sequelize = require('./db');
const User = require('./models/User');
const URL = require('./models/URL');

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synced!');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();
