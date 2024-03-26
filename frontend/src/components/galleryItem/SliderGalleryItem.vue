<template>
 
    <swiper
    class="slider__items"
    :modules="modules"
    :slides-per-view="1"
    :space-between="5"
    :parallax="true"

    @swiper="onSwiper"
    @slideChange="onSlideChange"
    >
        <swiper-slide v-for="(item, index) in paitings">
            <div :class="`slider__item painting item-${index < 10? '0' + index : index} slider__item_active`" style="">
                <button class="painting-buy">
                    <img class="icon" src="@/assets/svg/cart_w.svg">
                </button>
                <div class="painting-text">
                        <div class="align" v-html="item.poem"></div>
                        {{ item.img }}
                </div>
                <div class="painting-image">
                    <img class="image" :src="`../../files/gallery/${item.img}`"  loading="lazy">
                    <div class="painting-info">
                        <div class="info">
                            <div class="info-row">Картина {{item.number}}</div>
                            <div class="info-row">{{item.material}}, {{item.paints}}, {{item.size}}. {{item.year}}</div>
                        </div>
                        <a class="button primary green" @click="bay" >
                            <img class="icon" src="@/assets/svg/cart_w.svg"/>
                            <span class="text">купить</span>
                        </a>
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
        <button @click="slidePrev" class="slider__btn slider__btn_prev" style="z-index: 1000;">
            <img class="icon one" src="@/assets/svg/prev_g.svg">
            <img class="icon two" src="@/assets/svg/prev_y.svg">
        </button>
        <button @click="slideNext" class="slider__btn slider__btn_next" style="z-index: 1000;">
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
            paitings: Object,
            currIndex: String,
            galleryId: String,
            },
        data(){
            return{
                swiper: null
            }
        },
         mounted(){
           this.swiper = document.querySelector(`.swiper`).swiper;
           console.log('...=',document.querySelector(`.swiper`))
           this.swiper.slideTo(this.$route.params.id - 1)
           console.log(this.$route.params)
         
        },
        methods:{
            onSlideChange(e){
                const index = e.activeIndex + 1
                this.$emit('setCurrIndex', index)
                this.$router.push({  params: {  id: index }})             
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