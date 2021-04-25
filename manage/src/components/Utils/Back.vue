<!-- back -->
<template>
  <div class="back">
    <div class="nk-block-head-content">
      <a
        @click="back"
        class="btn btn-outline-light bg-white d-none d-sm-inline-flex"
        ><em class="icon ni ni-arrow-left"></em><span>返回</span></a
      >
      <a
        @click="back"
        class="btn btn-icon btn-outline-light bg-white d-inline-flex d-sm-none"
        ><em class="icon ni ni-arrow-left"></em
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    //数据
    return {};
  },
  //监听
  computed: {},

  //监控data中的数据变化
  watch: {},

  //方法集合
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  //创建完成
  created() {},
  //挂载完成
  mounted() {},
};
</script>

<style lang='less' scoped>
</style>