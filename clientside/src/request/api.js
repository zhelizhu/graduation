// 登录注册页天气查询

// import {getAxios,postAxios} from './manage'
import {postAxios} from './manage'


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
