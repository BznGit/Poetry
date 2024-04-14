<template>
    <div class="main">
        <div class="module books">
            <div class="module-center">
                <h2 class="module-title">Книги</h2>
                <div class="module-text">
                    <i >
                        Произведения И. Я. Булгакова — визуализация неуловимого духа, обитающего в безграничности вселенной, 
                        зачастую человеком не осознаваемого , но безусловно наличествующего в глубине его подсознания.
                    </i>
                </div>
                <div class="module-content">
                    <div  class="grid books page">
                        <div v-for="(item, index) in books" class="column">
                            <router-link 
                                class="item book" 
                                :to="`/books/${item.id}`"
                            >
                                <div class="book-image">
                                    <img class="image" style="height: 660px; background: #333;" v-lazy="`./files/books/${item.img}`"/>
                                </div>
                            </router-link>
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
    components: {
        SliderBooksFull
    },
    name: 'BooksView',
    props: {
        msg: String
    },
    data(){
        return {
            books: this.userStore.getBooks
        }
    },
    mounted(){
        this.$Lazyload.$on('loaded', function ({ el }, formCache) {
            el.style.height  = 'auto'
           
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
