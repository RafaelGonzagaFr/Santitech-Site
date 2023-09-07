const Sequelize = require('sequelize');

//Conexão com o banco de dados MySql
const sequelize = new Sequelize('santitech', 'root', 'db*1960', {host: 'localhost', dialect: 'mysql', port: '3308'});

module.exports =  {
    Sequelize: Sequelize, 
    sequelize: sequelize
}