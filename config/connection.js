require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    // host: '127.0.0.1',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true
    },
    // port: 3301
  }
)

  // ? new Sequelize(process.env.JAWSDB_URL)

module.exports = sequelize;
