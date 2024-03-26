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
                                    :events="events"                                    
                                    class="slider__items"
                                />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
   
</template>

<script>
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
        SliderEvents
    },
    data(){
        return {
            currIndex: null,
            books: null
        }
    },
    created(){
        this.events = this.userStore.events;
        this.currIndex = this.events.findIndex(item=>item.id == this.$route.params.id)

    },
    methods:{
        setCurrIndex(index){
            this.currIndex = index;
        }
    }   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
