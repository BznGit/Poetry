<template>
    <swiper
        class="slider__items"
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        :parallax="true"

        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
        <swiper-slide 
            v-for="(item, index) in books"
            class="item book" 
            :to="`/books/${item.id}`"
        >
            <div :class="`slider__item item-${index+1 < 10? '0' + index+1 : index+1} item book slider__item_active`" style="">
                <div class="book-title">{{item.name}}</div>
                <div class="book-image">
                    <img class="image" :src="`./files/books/${item.img}`"/>
                </div>
                <div class="book-buttons">
                    <router-link class="link-more" :to="`/poems/${item.id}`">
                        <div class="text">Сборник онлайн</div>
                        <img class="icon" src="@/assets/svg/more.svg">
                    </router-link>
                    <router-link class="button primary green" :to="`/cart`">
                        <img class="icon" src="@/assets/svg/cart_w.svg"/>
                        <span class="text">купить PDF</span>
                    </router-link>
                </div>
                <div class="book-content">
                    <div class="text" style="white-space: pre-wrap;">
                       {{item.titel}}
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
                id: String
            },
        data(){
            return{
                swiper: null
            }
        },
        created(){
            
        },
        mounted(){
            this.swiper = document.querySelector(".swiper").swiper;
            this.swiper.slideTo(this.$route.params.id - 1)
         
        },
        methods:{
            onSlideChange(e){
                const index = e.activeIndex + 1
                this.$emit('setCurrIndex', index)
                this.$router.push({ name: 'books-item', params: { id: index }})             
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