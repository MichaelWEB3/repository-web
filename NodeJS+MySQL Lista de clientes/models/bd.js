const Sequelize = require('sequelize')


//conectar com banco de dados
const sequelize = new Sequelize('servicoodo','root','ribeiro.3',{
    host:"localhost",
    dialect:'mysql'
  })


module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize
}