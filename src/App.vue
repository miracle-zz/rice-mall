<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>
<script>
import storage from './storage/index'
export default {
  name: 'app',
  mounted () {
    storage.setItem('a', 1)
  }
}
</script>
<style>
</style>
