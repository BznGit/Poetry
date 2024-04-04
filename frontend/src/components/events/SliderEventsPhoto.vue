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
        <swiper-slide 

            v-for="(item, index) in photos"
            class="item book" 
        >
      
            <img :src="`../files/eventsPhoto/${image}`"/>
        </swiper-slide>
        
 
    </swiper>
    {{ photos }}
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
    import { useStore } from '../../store/index'
     
    export default {
  
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            const userStore = useStore();
            const swiperSlide = useSwiperSlide();
                const onSwiper = (swiper) => {
            };
                const onSlideChange = (e) => {
            };
            return {
                onSwiper,
                onSlideChange,
                modules: [ Navigation, Pagination, Scrollbar, A11y ],
                userStore
            };
        },
        props: {
            currIndex: Number,
            photos: Object
        },
        mounted(){
            let index = this.photos.findIndex(item=>item.id == this.$route.params.id)
            this.swiper = document.querySelector(".swiper").swiper;
           this.swiper.activeIndex = index
 
            this.swiper.update()
        },
        methods:{
            onSlideChange(e){
                const index = e.activeIndex
                let currId = this.photos[index].id
                this.$emit('setCurrIndex', index)
                this.$router.push({ params: { id: currId }})             
            },
            slideNext(){
                this.swiper.slideNext()
            },
            slidePrev(){
                this.swiper.slidePrev()
            }, 
            addToCart(id){
                this.userStore.addCartBook(id) 
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