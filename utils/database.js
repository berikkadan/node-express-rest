const Sequelize = require("sequelize");

const DB_NAME = "node";
const USER_NAME = "root";
const PASSWORD = "password";

const sequelize = new Sequelize("postgres://postgres:@localhost:5432/node");

module.exports = sequelize;
