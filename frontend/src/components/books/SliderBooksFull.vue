<template>
    <swiper
        class="slider__items"
        :modules="modules"
        :slides-per-view="1"
        :space-between="1"
        :parallax="true"

        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
        <swiper-slide 
            v-for="(item, index) in books"
            class="item book" 
            :to="`/books/${item.id}`"
        >
            <div :class="`slider__item item-${index < 10? '0' + (index + 1) : index} item book slider__item_active`" style="">  
                <div class="book-title">{{item.name}}</div>
                <div class="book-image">
                    <img class="image" :style="`height: ${mobile? 600 : 1000}px; `" v-lazy="`../files/books/${item.img}`"/>
                </div>
                <div class="book-buttons">
                    <router-link 
                        v-if="item.onlineLink != 'words-born-from-the-soul'" 
                        :to="`${item.onlineLink=='poetic-paintings'? '/gallery/ecology-of-consciousness/1' : '/poems/'+ item.onlineLink}`"
                        class="link-more"
                    >
                        <div class="text">Сборник онлайн</div>
                        <img class="icon" src="@/assets/svg/more.svg">
                    </router-link>
                    <a class="button primary green"  @click="addToCart(item.id)">
                        <img class="icon" src="@/assets/svg/cart_w.svg"/>
                        <span class="text">купить PDF</span>
                    </a>
                </div>
                <div class="book-content">
                    <div class="text" style="white-space: pre-wrap;">
                       {{item.titel}}
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
                userStore
            };
        },
        props: {
            currIndex: Number,
            books: Object
        },
        data(){
            return{
                swiper: null,
                prevStop: true,
                nextStop: true,
                mobile: false         
            }
        },
        created() {
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize);
        },
        mounted(){
            let index = this.books.findIndex(item=>item.id == this.$route.params.id)
            this.swiper = document.querySelector(".swiper").swiper;
            this.swiper.activeIndex = index
            this.checkPrevNextStop(index)
            this.swiper.update()
            this.$Lazyload.$on('loaded', function ({ el }, formCache) {
                el.style.height  = 'auto'
             })
        },
        methods:{
            handleResize() { 
                if(window.innerWidth < 768)  this.mobile = true; else this.mobile = false
            },
            onSlideChange(e){
                const index = e.activeIndex
                let currId = this.books[index].id
                this.$emit('setCurrIndex', index)
                this.$router.push({ params: { id: currId }}) 
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
                if(index  == this.books.length-1) this.nextStop = false; else this.nextStop = true;
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