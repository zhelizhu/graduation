<!-- colorline -->
<template>

    <ul class='colorline'>

      <li v-for="(item,index) in color" :key="index" :style="{background:item}"></li>

    </ul>

</template>

<script>


export default {

   data() {

       return {

         color:[
           '#fe5a28','#3ccafe','#476de3','#1a2559','#fc6f42'
         ]

       };
   }
}
</script>

<style lang='less' scoped>

.colorline{

  height: 5px;

  display: flex;

  li{

    flex: 1;

  }

}

</style>