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
        <swiper-slide v-for="(item, index) in events">
            <div :class="`slider__item item-${index+1 < 10? '0' + index+1 : index+1}`" style="">
                <div class="event-status archive">
                    <div class="title">
                        {{item.name}}
                    </div>
                    <div class="divider">/</div>
                    <div :class="`status ${item.active? 'active' : ''}`">сейчас</div>
                    <div :class="`status${!item.active? 'archive' : ''}`">в архиве</div>
                </div>
                <div class="item event archive">
                    <div class="event-media">
                        <img class="image" :src="`../files/events/${item.img}`"/>
                    </div>
                    <div class="event-text">
                        <div class="text">
                            {{item.titel}}
                        </div>
                    </div>
                    <div class="event-info">
                        <div class="location">
                            <div class="icons">
                                <img class="image active" src="@/assets/svg/map_pointer_y.svg">
                                <img class="image archive" src="@/assets/svg/map_pointer_y.svg">
                            </div>
                            <div class="text">
                                {{ item.place }}
                            </div>
                        </div>
                        <div class="date">
                            <div class="icons">
                                <img class="image" src="@/assets/svg/time_g.svg">
                            </div>
                            <div class="text">
                                <div class="row">{{item.time}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="item.additionally" class="item event content">
                    <div v-if="item.additionally.video"  class="event-media">
                        <iframe class="frame"
                                :src="item.additionally.video"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                    </div>
                    <div class="event-text">
                        <div class="text">
                            {{ item.additionally.text }}
                        </div>
     
                    </div>
                    <div class="event-photo event-02">
                        <img v-for="image in item.additionally.images"
                            :src="`../files/eventsPhoto/${image}`"
                        />
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
            currIndex: Number,
            events: Object
        },
        data(){
            return{
                swiper: null
            }
        },
        created(){
            
        },
        mounted(){
            let index = this.events.findIndex(item=>item.id == this.$route.params.id)
            this.swiper = document.querySelector(".swiper").swiper;
            this.swiper.activeIndex = index
         
        },
        methods:{
            onSlideChange(e){
                const index = e.activeIndex
                let currId = this.events[index].id
                this.$emit('setCurrIndex', index)
                this.$router.push({ params: { id: currId }})             
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