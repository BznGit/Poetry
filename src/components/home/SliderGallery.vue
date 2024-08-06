<template>
    <swiper
    class="slider__items "
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :parallax="true"

    @swiper="onSwiper"
    @slideChange="onSlideChange"
    >
        <swiper-slide v-for = "(item, index) in data " :key="item">
            <div class="slider__item painting item-01" style="">
                <router-link class="item painting item-01" :to="`/gallery/`+ galleryId +`/` + item.number">
                    <div class="painting-image" >
                        <img  class="image":style="`min-height: ${getHeightKoef(item.size) * parseInt(item.height)}px;`" v-lazy="`./files/gallery/` + item.preview"/>
                    </div>
                    <div class="painting-text">
                        <div  class="align">
                            <div v-html="item.poem"></div>
                        </div>
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
    import { Swiper, SwiperSlide, useSwiperSlide   } from 'swiper/vue';
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
import { handleError } from 'vue';
       
    export default {
  
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
           // const swiperSlide = useSwiperSlide();
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
            galleryId: String
            },
        data(){
            return{
                swiper: null,
                prevStop: true,
                nextStop: true  
            }
        },
        mounted(){
           this.swiper = document.querySelector(".gallery .swiper").swiper;
           this.checkPrevNextStop(this.swiper.activeIndex)
           this.$Lazyload.$on('loaded', function ({ el }, formCache) {
             //  el.style.height  = 'auto'
           })
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
            },
            getHeightKoef(text){
                let index = text.indexOf('x')
                if(index != -1){
                    let h = parseInt(text.substring(0, index))
                    let w = parseInt(text.substring(index + 1, text.length))
                    let k = h/w
                    return k  
                }
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