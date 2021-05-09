// 用户模型

let sequelize = require('../../db/connect')

const { DataTypes, Model } = require('sequelize');

class User extends Model {}

User.init({
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
    unique: true,
    defaultValue: '',
    comment: '用户id'
  },
  asFanId: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
    defaultValue: '',
    comment: '作为粉丝id'
  },
  email: {
    type: DataTypes.STRING(40),
    allowNull: false,
    defaultValue: '',
    comment: '用户邮箱'
  },
  password: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: '',
    comment: '用户密码'
  },
  nickName: {
    type: DataTypes.STRING(16),
    allowNull: false,
    defaultValue: '',
    comment: '用户昵称'
  },
  phone: {
    type: DataTypes.STRING(11),
    allowNull: true,
    defaultValue: null,
    comment: '用户手机号'
  },
  sex: {
    type: DataTypes.BOOLEAN(1),
    allowNull: false,
    defaultValue: 2,
    comment: '用户性别'
  },
  avatar: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1200678983,2021774119&fm=111&gp=0.jpg',
    comment: '用户头像'
  },
  createdAt:{
    type: DataTypes.DATE,
    defaultValue: 'CURRENT_TIMESTAMP',   
  }
}, 
{
  // 这是其他模型参数
  sequelize, // 我们需要传递连接实例
  tableName: 'User' // 我们需要选择模型名称
});

// 定义的模型是类本身

User.sync({force: false})

module.exports = User