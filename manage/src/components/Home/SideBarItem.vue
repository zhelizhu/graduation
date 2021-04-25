<!-- side-bar-item -->
<template>
  <div class="nk-sidebar-main is-light">
    <div class="nk-sidebar-inner" data-simplebar>
      <div class="nk-menu-content menu-active" data-content="navDashboards">
        <h5 class="title">{{sideBarList.title}}</h5>
        <div class="side-bar-item">
          <ul class="nk-menu">
            <li
              class="nk-menu-item"
              v-for="(item, index) in sideBarList.item"
              :key="index"
              @click="toHomeSidePage(item.to)"
            >
              <a href="javascript:;" class="nk-menu-link">
                <span class="nk-menu-icon"
                  ><em class="icon ni ni-dashboard-fill"></em
                ></span>
                <span class="nk-menu-text">{{ item.title }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["sideBarList"],

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

    toHomeSidePage(to){

      if(this.$route.path === to ){

        return

      }

      this.$router.push(to)

    }

  },
  //创建完成
  created() {},
  //挂载完成
  mounted() {},
};
</script>

<style lang='less' scoped>
</style>