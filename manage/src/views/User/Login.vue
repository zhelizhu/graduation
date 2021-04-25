<!-- 登录 -->
<template>

    <el-form :model="ruleForm" status-icon :hide-required-asterisk="true" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <h4 class="form-title"><i class="el-icon-s-promotion"></i>欢迎登录</h4>

        <el-form-item
                prop="email"
                label="邮箱"
                
                :rules="[
                  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                  { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur'] }
                ]"
            >

            <el-input v-model="ruleForm.email" autocomplete="on"></el-input>

        </el-form-item>

        <!-- prop关联ruler -->

        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="on"></el-input>
        </el-form-item>

        <transition name="el-zoom-in-center">

          <el-form-item   
            v-if="isShowDrag" 
            class="drag-validator" 
            :class="{dragAminate:dragAminate}">
            <DragValidator></DragValidator>
          </el-form-item>

        </transition>

        <el-form-item class="form-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>

    </el-form>  

</template>

<script>

//import


import '../../assets/less/loginregister.less'

import  validator  from '../../assets/js/validator'

import  DragValidator from '../../components/User/DragValidator'

import {mapState} from 'vuex'

import {loginAxios} from '../../request/api'

export default {

    components: {DragValidator},

//数据
    data() {

      return {

        ruleForm: {

          email: '',

          pass: '',

          checkPass: ''
          
        },
        rules: {

          pass: [
            { validator: validator.validatePass, trigger: 'blur' }
          ],

          checkPass: [
            { validator: validator.validateCheckPass, trigger: 'blur' }
          ]
          
        },

        isShowDrag: false,

        dragAminate:false,

        clickSubmitCount:0
      };

    },

//监听
    computed: {
      ...mapState(['dragValidatorStatus'])
    },

//数据
    watch: {},

//方法
    methods: {

        submitForm(formName) {

          this.$refs[formName].validate((valid) => {

            if (valid) {

              if (!this.dragValidatorStatus) {

                      this.isShowDrag = true

                      if (this.clickSubmitCount === 0) {

                          this.clickSubmitCount++

                          return
  
                      }

                      this.dragAminate = true

                      setTimeout(()=>{

                        this.dragAminate = false

                      },800)

                      return
            
              }else{
     
                  setTimeout(()=>{

                    this.isShowDrag = false

                  },1000)

                  let params = {

                        userEmail: this.ruleForm.email,

                        userPwd: this.ruleForm.pass

                  }

                  loginAxios(params).then((res) => {

                        if (res.data.status === 2000) {

                             this.$message.success(res.data.msg)

                             localStorage.setItem('userToken',res.data.token,'1d')

                             this.$router.push('/')

                             return
                        }

                        else{

                            this.$message.error(res.data.msg)

                            return

                        }

                  })

              }

            } 
            else {

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

.dragAminate{

  animation: drag .8s;

}


.form-btn{

  /deep/ .el-button{

    width: 50%;

  }

}

@keyframes drag {

  10%, 90% { transform: translate3d(-1px, 0, 0); }

  20%, 80% { transform: translate3d(+2px, 0, 0); }

  30%, 70% { transform: translate3d(-4px, 0, 0); }

  40%, 60% { transform: translate3d(+4px, 0, 0); }

  50% { transform: translate3d(-4px, 0, 0); }
  
}

@media screen and (max-width: 992px){

    .form-btn{

        /deep/ .el-button{
        
          width: 100%!important;
    
        }

    }

}


</style>