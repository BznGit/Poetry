<template>
    <swiper
        class="slider__items"
        :modules="modules"
        :slides-per-view="1"
        :space-between="5"
        :effect="'none'"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
        <swiper-slide v-for="item in poems" :key="item.id">
            <div :class="`slider__item item-0${indexPoem} slider__item_active`" style="">
                <div :class="`item poem poem-0${indexPoem}`">
                    <div class="poem-text">
            
                        <div v-html="item.text"></div>
                    </div>
                </div>
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
            const swiper = useSwiper();
            const swiperSlide = useSwiperSlide();
            const onSwiper = (swiper) => {
            };
            const onSlideChange = (e) => {
            };

        return {
            swiper,
            onSwiper,
            onSlideChange,
            swiperSlide,
            modules: [ Navigation, Pagination, Scrollbar, A11y ],
        };
      },
        props: {
            collectionId: String,
            indexPoem: String,
            poems: Object,
            currIndex: String, 
        },
        data(){
            return{
                swiper: null,
                prevStop: true,
                nextStop: true
            }
        },
        mounted(){
            this.swiper = document.querySelector(`.swiper`).swiper;
            let index = this.poems.findIndex(item=>item.id == this.$route.params.id)
            this.swiper.activeIndex = index
            this.checkPrevNextStop(index)
            this.swiper.update()
            this.$emit('setCurrIndex', index + 1);
            
            document.addEventListener("keydown", function(event) {
            event.preventDefault();
                const swiper = document.querySelector(".swiper").swiper;
                if (event.keyCode == 37) swiper.slidePrev()
                if (event.keyCode == 39) swiper.slideNext()
                
            });
        },
        methods:{
            onSlideChange(e){
                const index = e.activeIndex + 1
                this.$emit('setCurrIndex', index)
                let id = this.poems[e.activeIndex].id
                this.$router.push({  params: {  id: id }}) 
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
                if(index  == this.poems.length-1) this.nextStop = false; else this.nextStop = true;
            },
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