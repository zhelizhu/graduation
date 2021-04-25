<!-- search-setting -->
<template>

  <div class="video-search-setting">

    <el-form :inline="true" :model="formInline" class="demo-form-inline">

      <el-form-item label="搜索视频">
        <el-input
          v-model="formInline.name"
          placeholder="输入视频名称"
        ></el-input>
      </el-form-item>

      <el-form-item label="状态">
        <el-select v-model="formInline.status" placeholder="输入状态">
          <el-option label="选择状态" value="-1"></el-option>
          <el-option label="通过" value="0"></el-option>
          <el-option label="审核中" value="1"></el-option>
          <el-option label="不通过" value="2"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="日期">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="formInline.createAt"
          style="width: 100%"
        ></el-date-picker>
      </el-form-item>

      <el-form-item>
        <a @click="onSubmit" href="javascript:;" class="btn btn-white btn-outline-light"
          ><em class="icon ni ni-search"></em><span>查询</span></a
        >
      </el-form-item>

      <el-form-item>
        <a @click="sendshowUpdata" href="javascript:;" class="btn btn-white btn-outline-light"
          ><em class="icon ni ni-plus"></em><span>添加视频</span></a
        >
      </el-form-item>
    </el-form>

  </div>
</template>

<script>

import { recentlyTimeFormat } from '@/utils/timeFrame.js'

export default {
  components: {},

  data() {
    //数据
    return {
      formInline: {

        name: "",

        status: "-1",

        createAt: "",
        
      },
    };
  },
  //监听
  computed: {},

  //监控data中的数据变化
  watch: {},

  //方法集合
  methods: {
    onSubmit() {

      this.formInline.createAt = recentlyTimeFormat(this.formInline.createAt,2)

      this.$emit('seachParam',this.formInline)

      console.log("submit!");


    },
    sendshowUpdata() {

      this.$emit('show-updata',true)

    }
  },
  //创建完成
  created() {},
  //挂载完成
  mounted() {},
};
</script>

<style lang='less' scoped>

.video-search-setting {

  .el-form-item {
    
    padding-top: 25px;

    margin-bottom: 0;

  }

}
</style>