// const sequelize =require('../dbConfiguration')
// const {DataTypes} =require('sequelize')
// const Local=sequelize.define('Local',{
//     id: {type: DataTypes.STRING, primaryKey: true, unique:true},
//     type:{type:DataTypes.STRING,allowNull:false}
// })
// const Subscribers=sequelize.define('Subscribers',{
//     id: {type: DataTypes.INTEGER,autoIncrement: true, primaryKey: true},
//     subscriber:{type: DataTypes.STRING},
//     mode:{type:DataTypes.BOOLEAN}
// })
// const Messages=sequelize.define('Messages',{
//     id: {type: DataTypes.STRING,unique:true, primaryKey: true},
//     message:{type: DataTypes.STRING},
//     createdate:{type:DataTypes.STRING}
// })



// Local.hasMany(Messages)
// Messages.belongsTo(Local)

// Local.hasMany(Subscribers)
// Subscribers.belongsTo(Local)



// module.exports={ Messages, Subscribers, Local}

