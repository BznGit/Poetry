<template>
    <swiper
    class="slider__items grid poems collection"
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :parallax="true"

    @swiper="onSwiper"
    @slideChange="onSlideChange"
    >
        <swiper-slide v-for = "(item, index) in data" :key="item" >
            <div :class="`slider__item poem item-0${index+1} slider__item_active`" style="">
                <router-link :class="`item poem poem-0${index+1}`" :to="`/${item.collection.id}/${item.poem.id}`">
                    <div class="poem-text">
                        <div v-html="item.poem.text"></div>
                    </div>
                    <div class="poem-link">
                        <div class="link-more" :href="`/` + item.collection.id + `/`+ 1">
                            <div class="text">{{item.collection.id}}</div>
                            <img class="icon" src="@/assets/svg/more.svg"/>
                        </div>
                    </div>
                </router-link>
            </div>
        </swiper-slide>
    </swiper>
    <button @click="slidePrev" class="slider__btn slider__btn_prev" style="z-index: 2;">
        <img class="icon one" src="@/assets/svg/prev_g.svg">
        <img class="icon two" src="@/assets/svg/prev_y.svg">
    </button>
    <button @click="slideNext" class="slider__btn slider__btn_next" style="z-index: 2;">
        <img class="icon one" src="@/assets/svg/next_g.svg">
        <img class="icon two" src="@/assets/svg/next_y.svg">
    </button>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide, useSwiper, useSwiperSlide   } from 'swiper/vue';
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
       
    export default {
  
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            const swiperSlide = useSwiperSlide();
            const onSwiper = (swiper) => {
            };
            const onSlideChange = (e) => {
            };

        return {
          onSwiper,
          onSlideChange,
          modules: [ Navigation, Pagination, Scrollbar, A11y ],
          
        };
      },
        props: {
            data: Object,
            
            },
        data(){
            return{
                swiper: null
            }
        },
        mounted(){
            this.swiper = document.querySelector(".collection2 .swiper").swiper;
        },
        methods:{
            onSlideChange(e){
             
            },
            slideNext(){
                this.swiper.slideNext()
            },
            slidePrev(){
                this.swiper.slidePrev()
            }
        }
    };
  </script>
  <style >
.swiper-button-next{
    top: 30%;
    color: #FFC200
}
.swiper-button-prev{
    top: 30%;
    color: #FFC200
    
}
</style>