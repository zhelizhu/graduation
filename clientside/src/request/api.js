// 登录注册页天气查询

import { getAxios,postAxios } from './manage'
// import {postAxios} from './manage'


// 注册
export const registerAxios = (params)=> {

    return postAxios('/users/register',params)

}

// 验证码
export const validCodeAxios = (params)=> {

    return postAxios('/sendValidCode',params)

}


// 登录
export const loginAxios = (params) => {

    return getAxios('/users/login',params)

}

// 验证用户token

export const checkUserToken = (params) => {

    return getAxios('/utils/userToken',params)

}

// 轮播图

export const banner = (params) => {

    return getAxios('/clientside/banner',params)

}

// 视频上传

export const uploadVideo = (params) => {

    return postAxios('/videos/uploadVideo',params)

}


// 用户信息

export const userDetail = (params) => {

    return getAxios('/users/userDetail',params)

}

// 用户信息

export const production = (params) => {

    return getAxios('/users/production',params)

}


// 用户关注列表

export const attention = (params) => {

    return getAxios('/users/attention',params)

}

// 用户取消关注

export const callAttention = (params) => {

    return postAxios('/users/callAttention',params)

}

// 用户点击关注

export const playAttention = (params) => {

    return postAxios('/users/playAttention',params)

}

// 用户粉丝

export const fans = (params) => {

    return getAxios('/users/fans',params)

}

// 删除视频

export const deleteVideo = (params) => {

    return postAxios('/videos/deleteVideo',params)

}
