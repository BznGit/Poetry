<template>
    <swiper
        class="slider__items"
        :modules="modules"
        :slides-per-view="1"
        :space-between="0"
        :parallax="false"
        
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
        <swiper-slide 
            v-for="(item, index) in allphotos"
        >
            <img v-lazy="`../files/eventsPhoto/${item}`"/>
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
    import { Swiper, SwiperSlide  } from 'swiper/vue';
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

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
            const userStore = useStore();
            const onSwiper = (swiper) => {
            };
            const onSlideChange = (e) => {
            };
            return {
                onSwiper,
                onSlideChange,
                modules: [ Navigation, Pagination, Scrollbar, A11y ],
                userStore, 
            };
        },
        props: {
            photo: String,
            allphotos: Array,
      
        },
        data(){
            return {
                swiper: null,
                prevStop: true,
                nextStop: true
            }
        },
        mounted(){
           let index = this.allphotos.findIndex(item=>item == this.photo)
           this.swiper = document.querySelector(".photo .swiper").swiper;
           this.swiper.activeIndex = index
           this.checkPrevNextStop(index)
           this.swiper.update();
           window.addEventListener("keydown", this.move);
        },
        beforeUnmount(){
            window.removeEventListener("keydown", this.move)
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
            addToCart(id){
                this.userStore.addCartBook(id) 
            },
            checkPrevNextStop(index){
                if(index == 0) this.prevStop = false; else this.prevStop = true;
                if(index  == this.allphotos.length-1) this.nextStop = false; else this.nextStop = true;
            },
            move(event) {
                event.preventDefault();
                event.stopPropagation()
                const swiper = document.querySelector(".photo .swiper").swiper;
                if (event.keyCode == 37) swiper.slidePrev()
                if (event.keyCode == 39) swiper.slideNext() 
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