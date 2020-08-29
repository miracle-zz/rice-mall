<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
// import storage from './storage/index'
import { getUser, getCartCount } from 'network/login'

export default {
  name: 'app',
  data () {
    return {
      res: {}
    }
  },
  mounted () {
    this.getUser()
    this.getCartCount()
  },
  methods: {
    getUser () {
      getUser().then((res) => {
        this.$store.dispatch('saveUserName', res.username)
        // 保存到vuex内
      })
    },
    getCartCount () {
      getCartCount().then((res) => {
        this.$store.dispatch('saveCartCount', res)
        // 保存到vuex内
      })
    }
  }
}
</script>
<style lang="scss">
@import 'assets/scss/reset.scss';
@import 'assets/scss/config.scss';
@import 'assets/scss/button.scss';
</style>
