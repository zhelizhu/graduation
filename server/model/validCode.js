// 用户模型

let sequelize = require('../db/connect')

const { DataTypes, Model } = require('sequelize');

class ValidCode extends Model {}

ValidCode.init({
  // 在这里定义模型属性
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    comment: 'id'
  },
  validCodeId: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
    defaultValue: '',
    comment: '验证码id'
  },
  email: {
    type: DataTypes.STRING(40),
    allowNull: false,
    defaultValue: '',
    comment: '用户邮箱'
  },
  validCode: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
    defaultValue: '',
    comment: '验证码'
  }
}, 
{
  // 这是其他模型参数
  sequelize, // 我们需要传递连接实例
  tableName: 'ValidCode' // 我们需要选择模型名称
});

// 定义的模型是类本身

ValidCode.sync({force: false})

module.exports = ValidCode