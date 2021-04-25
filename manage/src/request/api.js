// 登录注册页天气查询

// 接口来自alapi

import {getAxios,postAxios} from './manage'


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

    return postAxios('/users/login',params)

}

// 获取用户列表
export const UserListAxios = (params) => {

    return getAxios('/userList',params)

}

// 获取登录用户信息

export const UserDetailAxios = (params) => {

    return postAxios('/users/userDetail',params)

}

// 添加用户

export const AddUserAxios = (params) => {

    return postAxios('/users/addUser',params)

}

// 批量删除用户

export const deleteUserAxios = (params) => {

    return postAxios('/users/deleteUser',params)

}

// 获取用户信息

export const ListUserDetail = (params) => {

    return postAxios('/users/listUserDetail',params)

}

// 更新用户信息

export const userUpdata = (params) => {

    return postAxios('/users/userUpdata',params)

}

// 重置密码

export const resetPwd = (params) => {

    return postAxios('/users/resetPwd',params)

}

// 视频列表

export const getVideoList = (params) => {

    return postAxios('/videoList',params)

}

// 删除视频

export const deleteVideoAxios = (params) => {

    return postAxios('/videos/deleteVideo',params)

}

// 添加视频

export const addVideoAxios = (params) => {

    return postAxios('/videos/addVideo',params)

}

// 首页数据

export const indexDataAxios = (params) => {

    return getAxios('/indexData',params)

}