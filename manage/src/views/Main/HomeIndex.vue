<!--  -->
<template>
  <div class="nk-block" style="padding: 70px 15px">
    <div class="row g-gs">
      <div
        class="col-xxl-3 col-lg-12"
        v-for="(item, index) in DataSummarization"
        :key="index"
      >
        <div class="card">
          <div class="nk-ecwg nk-ecwg6">
            <div class="card-inner">
              <div class="card-title-group">
                <div class="card-title">
                  <h6 class="title">{{ item.title }}</h6>
                </div>
              </div>
              <div class="data">
                <div class="data-group">
                  <div class="amount">{{ item.count }}</div>

                  <echarts :name="item.title" :option="item.option"></echarts>

                </div>
                <div class="info">
                  <span class="change up text-danger"
                    ><em class="icon ni ni-arrow-long-up"></em>4.63%</span
                  ><span>相比上周</span>
                </div>
              </div>
            </div>
            <!-- .card-inner -->
          </div>
          <!-- .nk-ecwg -->
        </div>
        <!-- .card -->
      </div>

      <!-- .col -->
    </div>
    <!-- .row -->
  </div>
  <!-- .nk-block -->
</template>

<script>
// gasp

// import gsap from "gsap";

import { indexDataAxios } from "../../request/api";

import  echarts  from '../../components/Echarts/echarts'

export default {

  components: { echarts },

  data() {
    //数据
    return {

      DataSummarization: [
        {
          title: "视频总数",
          count: 0,
          option: {
              tooltip: {
                  trigger: 'item'
              },
              legend: {
                  top: '5%',
                  left: 'center'
              },
              series: [
                  {
                      name: '访问来源',
                      type: 'pie',
                      radius: ['40%', '70%'],
                      avoidLabelOverlap: false,
                      itemStyle: {
                          borderRadius: 10,
                          borderColor: '#fff',
                          borderWidth: 2
                      },
                      label: {
                          show: false,
                          position: 'center'
                      },
                      emphasis: {
                          label: {
                              show: true,
                              fontSize: '40',
                              fontWeight: 'bold'
                          }
                      },
                      labelLine: {
                          show: false
                      },
                      data: []
                  }
              ]
          }
        },
        {
          title: "视频播放次数",
          count: "",
          option:{}
        },
        {
          title: "视频分享次数",
          count: "",
          option:{}
        },
        {
          title: "用户总数",
          count: 1000,
          option:{}
        },
        {
          title: "商品总数",
          count: 1000,
          option:{}
        },
      ]
    };
  },
  //监听
  computed: {},

  //方法集合
  methods: {

    getIndexData() {

      let prarms = {};

      indexDataAxios(prarms)

        .then((res) => {

          if (res.data.status === 3000) {

            let result = res.data.data;

            console.log(result);

            this.DataSummarization[0].count = result.length

            let dataArr = [{

            name: result[0].videoType,

            value: 1

          }]

          for (let i = 1; i < result.length; i++) {

              for (let j = 0; j < dataArr.length; j++) {

                  if (result[i].videoType == dataArr[j].name) {

                     dataArr[j].value++

                     break

                  } else if (j == dataArr.length - 1) {

                    dataArr.push({
                    
                      name: result[i].videoType,

                      value: 0

                    })

                  } else {

                    continue
                    
                  }

              }

          }

            this.DataSummarization[0].option.series[0].data = dataArr

          }
        })
        .catch((err) => {

          console.log(err);

        });
    }

  },
  //创建完成
  created() {
    this.getIndexData();
  },
  //挂载完成
  mounted() {
  },
};
</script>

<style lang='less' scoped>

</style>