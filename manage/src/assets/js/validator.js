export default {

    validatePass(rule, value, callback){

        if (value === '') {

          callback(new Error('请输入密码'));

        } else {

            let reg = /^[A-Za-z]\w{5,15}$/

            if(!reg.test(value)){

                callback(new Error('密码格式错误（字母开头6~16位）'));

            }else{

                callback();

            }
          
        }

    },

    checkvalidCode(rule, value, callback){

        if (value === '') {

          callback(new Error('请输入验证码'));

        } else{

            let reg =/^\d{6}$/

            if (!reg.test(value)) {

                callback(new Error('请输入6位验证码'));
                
            }else{

                callback()

            }
            
        }

    }

}