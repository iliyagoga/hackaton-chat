const sequelize =require('../dbConfiguration')
const {DataTypes} =require('sequelize')
const Assistent=sequelize.define('Assistent',{
    id: {type: DataTypes.INTEGER, primaryKey: true, unique:true, autoIncrement:true},
    socketId:{type: DataTypes.NUMBER}
})

 module.exports={ Assistent}

