<template>
  <div id="app">
     <router-view/>
    <div v-if="show">
      <tabbar></tabbar>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
import tabbar from './components/tabbar.vue'
export default {
  data(){
    return{
      show:true
    }
  },
  components:{
    tabbar
  },
  //监听全局组件变化!在单个页面不显示
  watch:{
    $route(to,from){
      if(this.$route.path == "/details" || '/login'){
        this.show=false;
      }else{
        this.show=true
      }
      if(this.$route.path =='/' || this.$route.path =='/shoppingcar' ||this.$route.path =='/person' ||this.$route.path =='/loginRegister' ||this.$route.path =='/search'){
        this.show=true
      }
    }
  }
}
</script>
