// 视频模型

let sequelize = require('../../db/connect')

// let User = require('../user') 

const { DataTypes, Model } = require('sequelize');

class Video extends Model {}

Video.init({
  // 在这里定义模型属性
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    comment: 'id'
  },
  videoId: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
    defaultValue: '',
    comment: '视频id'
  },
  videoSrc: {
    type: DataTypes.STRING(1000),
    allowNull: false,
    defaultValue: '',
    comment: '视频src'
  },
  videoBgSrc: {
    type: DataTypes.STRING(1000),
    allowNull: true,
    defaultValue: '',
    comment: '视频背景src'
  },
  videoName: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: '',
    comment: '视频名字'
  },
  videoInfo: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: '',
    comment: '视频介绍'
  },
  videoUpOfUser: {
    type: DataTypes.STRING(30),
    allowNull: false,
    defaultValue: '',
    comment: '上传者'
  },
  videoStatus:{
    type: DataTypes.INTEGER(10),
    allowNull: false,
    defaultValue: 1,
    comment: '视频状态'

  },
  videoType: {
    type: DataTypes.STRING(30),
    allowNull: true,
    defaultValue: null,
    comment: '视频类型'
  },
  playSum: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: 0,
    comment: '播放数'
  },
  comentSum: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: 0,
    comment: '评论次数'
  },
  collectSum: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: 0,
    comment: '收藏次数'
  },
  supportSum: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: 0,
    comment: '点赞数'
  },
  opposeSum: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: 0,
    comment: '踩数'
  }
}, 
{
  // 这是其他模型参数
  sequelize, // 我们需要传递连接实例
  tableName: 'Video' // 我们需要选择模型名称
});

// 定义的模型是类本身

// Video.belongsTo(User, {
//     foreignKey: 'userId'
// })

Video.sync({force: false})

module.exports = Video