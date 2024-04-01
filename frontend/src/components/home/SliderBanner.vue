<template>
    <swiper
      class="slider__items"
      :slides-per-view="1"
      :space-between="0"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(item, index) in data" :key="item.name">
        <router-link :class="`slider__item item-${index < 10? '0' + (index + 1) : index}`" :to="`/events/${item.i}`" style="">
                        <div class="banner">
                            <div class="banner-image">
                              <img :src="`./files/events/` + item.img" >
                            </div>
                            <div class="center">
                                <div class="banner-text">
                                  
                                    <h2 class="title bold">{{item.name}}</h2>
                                    <div class="text">
                                      {{item.titel}}
                                    </div>
                                    <div class="location">
                                        <img src="@/assets/svg/map_pointer.svg"/>
                                        <div>{{item.place}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
      </swiper-slide>
    </swiper>

  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
    import 'swiper/css/navigation';
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
    import { useStore } from '../../store/index'

    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        const userStore = useStore()
    
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
          modules: [Navigation, Pagination, Scrollbar, A11y],
          userStore
        };
      },
        data () {
      return {
        data: this.userStore.getEvents,

      }
    },
    };
  </script>