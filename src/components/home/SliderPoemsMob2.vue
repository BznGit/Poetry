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
                <router-link :class="`item poem poem-0${index+1}`" :to="`/poems/${item.collection.id}/${item.poem.id}`">
                    <div class="poem-text">
                        <div v-html="item.poem.text"></div>
                    </div>
                    <div class="poem-link">
                        <router-link class="link-more" :to="`/` + item.collection.id + `/`+ 1">
                            <div class="text">{{item.collection.id}}</div>
                            <img class="icon" src="@/assets/svg/more.svg"/>
                        </router-link>
                    </div>
                </router-link>
            </div>
        </swiper-slide>
    </swiper>
    <button @click="slidePrev" v-if="prevStop" class="slider__btn slider__btn_prev" style="z-index: 2;">
        <img class="icon one" src="@/assets/svg/prev_g.svg">
        <img class="icon two" src="@/assets/svg/prev_y.svg">
    </button>
    <button @click="slideNext" v-if="nextStop" class="slider__btn slider__btn_next" style="z-index: 2;">
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
         //   const swiperSlide = useSwiperSlide();
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
                swiper: null,
                prevStop: true,
                nextStop: true  
            }
        },
        mounted(){
            this.swiper = document.querySelector(".collection2 .swiper").swiper;
            this.checkPrevNextStop(this.swiper.activeIndex)
        },
        methods:{
            onSlideChange(e){
                this.checkPrevNextStop(e.activeIndex)
            },
            slideNext(){
                this.swiper.slideNext()
            },
            slidePrev(){
                this.swiper.slidePrev()
            },
            checkPrevNextStop(index){
                if(index == 0) this.prevStop = false; else this.prevStop = true;
                if(index  == this.data.length-1) this.nextStop = false; else this.nextStop = true;
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