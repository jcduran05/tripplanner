var Sequelize = require('sequelize');
var database = new Sequelize('postgres://localhost/tripplanner', {
  logging: true
});

module.exports = database;







