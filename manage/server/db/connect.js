const { Sequelize } = require('sequelize');

// 连接数据库
module.exports = new Sequelize('server', 'root', '123456', {
  
  host: 'localhost',

  dialect: 'mysql',

  define: {

      underscored : true

  },
  
  timezone: '+08:00'

});