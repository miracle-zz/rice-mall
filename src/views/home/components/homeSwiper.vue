<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions" v-if="slideList.length">
      <swiper-slide v-for="item in slideList" :key="item.id">
        <a :href="'/#/product/'+item.id">
          <img :src="item.img" alt />
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// import 'swiper/dist/css/swiper.css'
// import 'swiper/css/swiper.css'
// If you use Swiper 6.0.0 or higher
// import 'swiper/swiper-bundle.css'
export default {
  name: 'homeSwiper',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOptions: {
        loop: true,
        autoplay: true,
        effect: 'cube',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slideList: [
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: '/imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: '/imgs/slider/slide-3.jpg'
        },
        {
          id: '47',
          img: '/imgs/slider/slide-4.jpg'
        },
        {
          id: '48',
          img: '/imgs/slider/slide-5.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  // --swiper-pagination-color: #00ff33;
  height: 451px;
  a img {
    width: 100%;
    height: 100%;
  }
  .swiper-button-prev {
    left: 274px;
  }
}
</style>
