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
        <swiper-slide v-for="(item, index) in paitings">
            <div :class="`slider__item painting item-${index < 10? '0' + index : index} slider__item_active`" style="">
                <button class="painting-buy" @click="addToCart(item.number)" >
                    <img class="icon" src="@/assets/svg/cart_w.svg">
                </button>
                <div v-if="item.poem" class="painting-text">
                    <div class="align" v-html="item.poem"></div>

                </div>
                <div class="painting-image" :style="`${item.poem? '' :'margin-left: auto; margin-right: auto;'}`">
                  
                    <img :style="`min-height: ${ getHeightKoef(item.size) * parseInt(item.height)}px;`"
                        class="image" v-lazy="`../../files/gallery/${item.img}`">
                      
                    <div class="painting-info">
                        <div class="info">
                            <div class="info-row">Картина {{item.number}}</div>
                            <div class="info-row">{{item.material}}, {{item.paints}}, {{item.size}}. {{item.year}}</div>
                        </div>
                        <a class="button primary green" @click="addToCart(item.number)" >
                            <img class="icon" src="@/assets/svg/cart_w.svg"/>
                            <span class="text">в избранное</span>
                        </a>
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
    import { useStore } from '../../store/index'
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
            const userStore = useStore();
            const swiperSlide = useSwiperSlide();
            const onSwiper = (swiper) => {
            };
            const onSlideChange = (e) => {
            };

        return {
            userStore,
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
                swiper: null,
                prevStop: true,
                nextStop: true ,
                vis: false  ,
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
            this.swiper = document.querySelector(`.swiper`).swiper;  
            let index= this.paitings.findIndex(item=>item.number == this.$route.params.id)
            this.swiper.activeIndex = index
            this.checkPrevNextStop(index)
            this.$emit('setCurrIndex', index + 1 );

            window.addEventListener("keydown", this.move);
           
        },
        beforeUnmount(){
            window.removeEventListener("keydown", this.move)
        },
        methods:{
            getHeightKoef(text){
                let index = text.indexOf('x')
                if(index != -1){
                    let h = parseInt(text.substring(0, index))
                    let w = parseInt(text.substring(index + 1, text.length))
                    let k = h/w
                    return k  
                }
            },
            handleResize() { 
                if(window.innerWidth < 768)  this.mobile = true; else this.mobile = false
            },
            onSlideChange(e){
                const index = e.activeIndex + 1
                this.$emit('setCurrIndex', index)
                let id = this.paitings[e.activeIndex].number
                this.$router.push({  params: {  id: id }})  
                this.checkPrevNextStop(e.activeIndex)
                    
            },
            checkPrevNextStop(index){
                if(index == 0) this.prevStop = false; else this.prevStop = true;
                if(index  == this.paitings.length-1) this.nextStop = false; else this.nextStop = true;
            },
            slideNext(){
                this.swiper.slideNext()
            },
            slidePrev(){
                this.swiper.slidePrev()
            },
            addToCart(id){
                this.userStore.addCart(id) 
            },
            move(event) {
                event.preventDefault();
                event.stopPropagation()
                const swiper = document.querySelector(".swiper").swiper;
                if (event.keyCode == 37) swiper.slidePrev()
                if (event.keyCode == 39) swiper.slideNext() 
            }
        }
    };
    function move(event) {
        event.preventDefault();
        event.stopPropagation()
        const swiper = document.querySelector(".gallery-slider .swiper").swiper;
        if (event.keyCode == 37) swiper.slidePrev()
        if (event.keyCode == 39) swiper.slideNext() 
    }
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