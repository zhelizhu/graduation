// 模型集合
const User = require('./user/user')

const Admin = require('./user/admin')

const ValidCode = require('./utils/validCode')

const Video = require('./video/video')

const VideoUser = require('./video/videoUser')

const FansUp = require('./user/fansUp')

const Comment = require('./user/comment')

const userLike = require('./user/userLike')

module.exports = {

    User,

    Admin,

    ValidCode,

    Video,

    VideoUser,

    FansUp,

    Comment,

    userLike

}