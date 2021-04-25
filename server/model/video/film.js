// 电影模型

let sequelize = require('../../db/connect')

const { DataTypes, Model } = require('sequelize');

class Film extends Model {}

Film.init({
  // 在这里定义模型属性
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    comment: 'id'
  },
  filmId: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
    defaultValue: '',
    comment: '电影id'
  },
  filmSrc: {
    type: DataTypes.STRING(1000),
    allowNull: false,
    unique: true,
    defaultValue: '',
    comment: '电影src'
  },
  filmBgSrc: {
    type: DataTypes.STRING(1000),
    allowNull: false,
    unique: true,
    defaultValue: '',
    comment: '电影背景src'
  },
  filmName: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: '',
    comment: '电影名字'
  },
  filmInfo: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: '',
    comment: '电影介绍'
  }
}, 
{
  // 这是其他模型参数
  sequelize, // 我们需要传递连接实例
  tableName: 'Film' // 我们需要选择模型名称
});

// 定义的模型是类本身

// Film.belongsTo(User, {
//     foreignKey: 'userId'
// })

Film.sync({force: false})

module.exports = Film