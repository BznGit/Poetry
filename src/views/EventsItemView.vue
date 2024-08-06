<template>
    <div class="main">
        <div class="module events-slider">
            <div class="module-center">
                <div class="module-nav">
                    <router-link class="link-more" to="/events">
                        <img class="icon" src="@/assets/svg/back.svg"/>
                        <div class="text">Все события</div>
                    </router-link>
                </div>
                    <div class="module-content">
                        <div class="slider primary" data-slider="itc-slider" data-loop="false">
                            <div class="slider__wrapper">
                                <SliderEvents
                                    :currindex="currIndex"
                                    @setCurrIndex="setCurrIndex"
                                    @popupData="popupData"
                                    :events="events"                                    
                                />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div v-if="popup" class="popup active event-02">
        <button @click="close" class="close" style="z-index: 3;">
            <img class="icon one" src="@/assets/svg/close_g.svg">
            <img class="icon two" src="@/assets/svg/close_y.svg">
        </button>
   
        <div class="slider primary" data-slider="itc-slider" data-loop="false">
            <div class="slider__wrapper photo" >
                <SliderEventsPhoto
                    :allphotos="allPhotos"
                    :photo="photo"                             
                    class="slider__items"
                />
            </div>
        </div>
    </div>
    </div>
</template>

<script>
//script 
import SliderEventsPhoto from '../components/events/SliderEventsPhoto.vue'
import SliderEvents from '../components/events/SliderEvents.vue'
import { useStore } from '../store/index'
export default { 
    setup() {
        const userStore = useStore();
        return {
            userStore
        };
    },
    name: 'EventsItemView',
    components: {
        SliderEvents,
        SliderEventsPhoto
    },
    data(){
        return {
            currIndex: null,
            books: null,
            allPhotos: null,
            photo: null,
            popup: false,
        }
    },
    created(){
        this.events = this.userStore.events;
        this.currIndex = this.events.findIndex(item=>item.id == this.$route.params.id)
    },
    methods:{
        close(){
            this.popup = false
        },
        setCurrIndex(index){
            this.currIndex = index;
        },
        popupData(allPhotos, photo){
           this.allPhotos = structuredClone(allPhotos);
           this.photo = photo;
           this.popup = true
        }
    }   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
