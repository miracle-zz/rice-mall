<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>
<script>
// import storage from './storage/index'
export default {
  name: 'app',
  data () {
    return {
      res: {}
    }
  },
  mounted () {
    // 本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res
    // })
    // 通过easy-mock
    this.axios.get('/mock/user/login.json').then((res) => {
      this.res = res
    })
  }
}
</script>
<style>
@import './assets/scss/reset.scss';
</style>
