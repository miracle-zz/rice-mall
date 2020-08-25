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
  }
}
</script>
<style>
@import './assets/scss/reset.scss';
</style>
