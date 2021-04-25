// 用户视频关系模型

let sequelize = require('../../db/connect')

const { DataTypes, Model } = require('sequelize');

class videoUser extends Model {}

videoUser.init({
  // 在这里定义模型属性
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    comment: 'id'
  },
  userId: {
    type: DataTypes.STRING(30),
    allowNull: false,
    defaultValue: '',
    comment: '用户id'
  }
  ,
  videoId: {
    type: DataTypes.STRING(30),
    allowNull: false,
    defaultValue: '',
    comment: '视频id'
  }
}, 
{
  // 这是其他模型参数
  sequelize, // 我们需要传递连接实例
  tableName: 'videoUser' // 我们需要选择模型名称
});

// 定义的模型是类本身

videoUser.sync({force: false})

module.exports = videoUser