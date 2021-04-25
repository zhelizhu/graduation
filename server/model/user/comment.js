// 评论模型

let sequelize = require('../../db/connect')

const { DataTypes, Model } = require('sequelize');

class Comment extends Model {}

Comment.init({
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
    comment: '用户(up)id'
  },
  videoId: {
    type: DataTypes.STRING(30),
    allowNull: false,
    comment: '视频id'
  },
  content: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: '',
    comment: '内容'
  }
}, 
{
  // 这是其他模型参数
  sequelize, // 我们需要传递连接实例
  tableName: 'comment' // 我们需要选择模型名称
});

// 定义的模型是类本身

Comment.sync({force: false})

module.exports = Comment