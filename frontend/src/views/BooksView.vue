<template>
    <div class="main">
            <div class="module books">
                <div class="module-center">
                    <h2 class="module-title">Книги</h2>
                    <div class="module-text">
                        <i>
                            Будем учиться вспоминать. Будем учиться чувствовать. Будем учиться осознавать.<br/>
                            Будем учиться знать. Будем учиться думать и говорить. Будем учиться жить.
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
                                        <img class="image" :src="`./files/books/${item.img}`"/>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="foreword gallery">
        <div class="shadow"></div>
        <div class="content">
            <button class="close">
                <img class="icon one" src="@/assets/svg/close_g.svg">
                <img class="icon two" src="@/assets/svg/close_y.svg">
            </button>
            <div class="align">
                <div class="title bold">
                    «Экология сознания»
                </div>
                <div class="title">
                    Предисловие
                </div>
                <div class="text">
                    Синтез живописи и поэзии. Авторский тематический цикл
                    доктора философии, поэта и живописца Игоря Булгакова
                    (члена творческого Союза художников России, члена
                    Союза писателей России).
                </div>
                <div class="text quote">
                    <div>Когда бы нам увидеть дали ТО</div>
                    <div>Что кроется за гранью пониманья</div>
                    <div>Возможно некоторым это помогло б</div>
                    <div>Расширить зону самоосознанья</div>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
