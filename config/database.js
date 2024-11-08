require("dotenv").config()
const {Sequelize} = require("sequelise")
const env = process.env || 3100 
const config = require("./config")[env] 
const sequelize = new Sequelize(config)
module.exports = sequelize