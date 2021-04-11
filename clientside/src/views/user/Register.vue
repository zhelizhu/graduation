<!-- 注册 -->
<template>

    <el-form :model="ruleForm" status-icon :hide-required-asterisk="true" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <h4 class="form-title"><i class="el-icon-s-promotion"></i>欢迎注册</h4>

        <el-form-item
            prop="email"
            label="邮箱"
            :rules="[
              { required: true, message: '请输入邮箱地址', trigger: 'blur' },
              { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur'] }
            ]"
        >

        <el-input ref="email" v-model="ruleForm.email"></el-input>

        </el-form-item>

        <!-- prop关联ruler -->

        <el-form-item label="密码" prop="pass">
          <el-input ref="pass" type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="checkPass">
          <el-input ref="checkPass" type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="验证码" prop="validCode">
          <el-input type="text" v-model="ruleForm.validCode" autocomplete="off" :maxlength="6"></el-input>
          <el-button type="primary" :disabled="validCodeBtnDis" @click="getValidCode('ruleForm')">{{validCodeBtnText}}</el-button>
        </el-form-item>

        <el-form-item class="form-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>

    </el-form>  


</template>

<script>

//import
import '../../assets/less/loginregister.less'

import  validator  from '../../assets/js/validator'

import {registerAxios,validCodeAxios} from '../../request/api'

export default {

    components: {},

//数据
    data() {
      return {

        validCodeBtnText: '获取验证码',

        validCodeBtnDis: false,

        validCodeId: '',

        ruleForm: {

          email: '',

          pass: '',

          checkPass: '',

          validCode:'',
          
        },
        rules: {
          pass: [
            { validator: validator.validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: this.validateCheckPass, trigger: 'blur' }
          ],
          validCode: [
            { validator: validator.checkvalidCode, trigger: 'blur' }
          ]
        }
      };

    },

//监听
    computed: {


    },

//数据
    watch: {},

//方法
    methods: {

        getValidCode(){

           for (const key in this.ruleForm) {

               if(this.ruleForm[key] === ''){

                 if(key === 'validCode'){

                   break

                 }

                 this.$refs[key].focus()

                 this.$refs[key].blur()

                 return key

               }
                  
           }

           if (this.ruleForm.pass !== this.ruleForm.checkPass) {

             return
             
           }

            this.validCodeBtnDis = true

            let sendTime = 5

            let timer = setInterval(() => {

              sendTime--

              this.validCodeBtnText = `${sendTime}秒后重新获取`

              if (sendTime === 0) {

                clearInterval(timer)

                this.validCodeBtnDis = false

                this.validCodeBtnText = '获取验证码'

              }

            },1000)

            let params = {

              email: this.ruleForm.email

            }

            validCodeAxios(params).then((res) => {

              if(res.data.status === 1000){

                this.$message.success(res.data.msg)

                this.validCodeId = res.data.data

              }
              else{

                this.$message.success(res.data.msg)

              }

            })

        },

        
        validateCheckPass(rule, value, callback){
        
            if (value === '') {
            
              callback(new Error('请再次输入密码'));

            } else if (value !== this.ruleForm.pass) {
            
              callback(new Error('两次输入密码不一致!'));

            } else {
            
              callback();

            }

        },

        submitForm(formName) {

          this.$refs[formName].validate((valid) => {

            if (valid) {

              let params = {

                userEmail: this.ruleForm.email,

                userPwd: this.ruleForm.pass,

                uservalidCodeId: this.validCodeId,

                uservalidCode: this.ruleForm.validCode

              }

              registerAxios(params).then((res) => {

                console.log(res);

                if(res.data.status === 1000){

                  this.$message.success(res.data.msg)

                  this.$router.push('/login')

                  return

                }

                if(res.data.status === 1002||res.data.status === 1003){

                  this.$message.error(res.data.msg)

                  return

                }

                this.$message.error(res.data.msg)
                
              })

            } else {

              console.log('error submit!!');

              return false;

            }

          });
        },

        resetForm(formName) {

          this.$refs[formName].resetFields();

        }

    },

//创建完成
    created() {

    },

//挂载完成
    mounted() {

    }
}
</script>

<style lang='less' scoped>

.form-btn{

  /deep/ .el-button{

    width: 50%;

  }

}

@media screen and (max-width: 992px){

    .form-btn{

        /deep/ .el-button{
        
          width: 100%!important;
    
        }

    }

}


</style>