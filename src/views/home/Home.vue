<template>
  <div class="home">
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import navHeader from '../../components/content/navHeader'
import navFooter from '../../components/content/navFooter'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    navFooter,
    navHeader
  }

}
</script>
