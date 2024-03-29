<template>

<div class="main">
            <div class="module gallery-slider">
                <div class="module-center">
                    <div class="module-nav">
                        <router-link class="link-more" :to="`/gallery`">
                            <img class="icon" src="@/assets/svg/back.svg"/>
                            <div class="text">Вся галерея</div>
                        </router-link>
                        <div class="module-title">
                            <h2 class="title">«{{gallery.name}}»</h2>
                            <div class="counter">
                                <span>{{ currIndex }}</span>/<span>{{gallery.fullPaints.length}}</span>
                            </div>
                        </div>
                        <a class="button primary green" @click="addToCart(this.$route.params.id)">
                            <img class="icon" src="@/assets/svg/cart_w.svg"/>
                            <span class="text">купить</span>
                        </a>
                    </div>
                    <div class="module-content">
                        <div class="slider primary" data-slider="itc-slider" data-loop="false">
                            <div class="slider__wrapper">
                               <SliderGalleryItem
                                    :paitings="gallery.fullPaints" 
                                    :currIndex="currIndex" 
                                    :galleryId="gallery.id"
                                    @setCurrIndex="setCurrIndex"
                                 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

import SliderGalleryItem from '../components/galleryItem/SliderGalleryItem.vue'
import { useStore } from '../store/index'
export default {
    setup() {
        const userStore = useStore();
        return {
            userStore
        };
    }, 
    name: 'GallaryItemView',
    components: {
        SliderGalleryItem
    },
    data(){
        return {
           currIndex: 1,
           gallery: null
        }
    },
    created(){
        this.gallery = this.userStore.getGallery(this.$route.params.gallery)
        let index = this.gallery.fullPaints.findIndex(item=>item.id == this.$route.params.id)
        this.currIndex = index + 1
    },
    methods:{
        setCurrIndex(index){
            this.currIndex = index;
        },
        addToCart(id){
            this.userStore.addCart(id) 
        }
}     
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
