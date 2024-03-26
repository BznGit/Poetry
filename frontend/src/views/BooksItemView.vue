<template>
    <div class="main">
        <div class="module book-slider">
            <div class="module-center">
                <div class="module-content">
                    <div class="slider primary" data-slider="itc-slider" data-loop="false">
                        <div class="slider__wrapper">
                            <SliderBooksFull
                                :currindex="currIndex"
                                @setCurrIndex="setCurrIndex"
                                :books="books"
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
import { useStore } from '../store/index'
import SliderBooksFull from '../components/books/SliderBooksFull.vue'

export default { 
    setup() {
        const userStore = useStore();
        return {
            userStore
        };
    },
    name: 'EventsItemView',
    components: {
        SliderBooksFull
    },
    data(){
        return {
            currIndex: null,
            books: null
        }
    },
    created(){
        this.books = this.userStore.getBooks;
        this.currIndex = this.books.findIndex(item=>item.id == this.$route.params.id)

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

</style>./BooksItemView.vue
