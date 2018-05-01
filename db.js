const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://localhost:5432/newrelic_test', {
  logging: false
})

const Item = sequelize.define('item', {
  content: Sequelize.JSON,
  name: Sequelize.STRING,
  previous: Sequelize.STRING
})

sequelize.sync()

module.exports = sequelize
module.exports.Item = Item
