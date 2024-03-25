<template>
    <div class="main">
        <div v-for="(item, index) in data" class="module poems-slider">
            <div class="module-center">
                <div :class="`module-line poem-0${index}`">
                    <img class="image" :src="`./files/poems/${item.logo}`">
                </div>
                <h2 :class="`module-title poem-0${index}`">
                    «{{item.name}}»
                </h2>
                <div class="module-text">
                    <i>
                        {{item.titel}}
                    </i>
                </div>
                <div :class="`module-foreword foreword-0${index}`">
                    <div class="link-more">
                        <img class="icon intro" src="@/assets/svg/intro.svg"/>
                        <div class="text">Предисловие</div>
                        <img class="icon" src="@/assets/svg/more.svg"/>
                    </div>
                </div>
                <div class="module-content">
                    <div class="slider primary" data-slider="itc-slider" data-loop="false">
                        <div :class="`slider__wrapper slide-${index}`">
                            <SliderPoems 
                            :poems="item.allPoems"
                            :indexPoem="index"
                            :collectionId="item.id"/>
                        </div>
                    </div>
                </div>
                <div class="module-more">
                    <router-link class="link-more" :to="`/poems/${item.id}`">
                        <div class="text">Весь сборник</div>
                        <img class="icon" src="@/assets/svg/more.svg"/>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div v-for="(item, index) in data"  :class="`foreword poem-0${index}`">
        <div class="shadow"></div>
        <div class="content gallery">
            <button class="close">
                <img class="icon one" src="@/assets/svg/close_g.svg">
                <img class="icon two" src="@/assets/svg/close_y.svg">
            </button>
            <div class="poem-text">
                <div class="title bold">
                    «{{item.name}}»
                </div>
                <div class="title">
                    Предисловие
                </div>
                <div class="text">
                    {{item.titel}}
                </div>
                <div class="text quote" style="white-space: pre-wrap;">
                    {{item.foreword}}
                </div>
                <div class="text">
                    {{item.end}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SliderPoems from '../components/poems/SliderPoems.vue'
import { useStore } from '../store/index'

export default {
    setup() {
        const userStore = useStore();
        return {
          userStore
        };
    },
    name: 'AboutView',
    components: {
        SliderPoems
    },
    props: {
        msg: String
    },
    data () {
        return {
            data: this.userStore.getAllCollections(),
         }
    },
    mounted(){
        const moduleForewords = document.querySelectorAll('.module-foreword')
        const forewords = document.querySelectorAll('.foreword')

        for (let i = 0; i < moduleForewords.length; i++) {
            const linkMore = moduleForewords[i].querySelector('.link-more')
            const foreword = forewords[i]
            const closeBtn = foreword.querySelector('.close')
            const shadow = foreword.querySelector('.shadow')

            linkMore.addEventListener('click', function (event) {
                event.preventDefault()
                foreword.classList.add('active')
                document.body.classList.add('overflow')
            })

            document.addEventListener('click', function (event) {
                const target = event.target
                if (!target.closest('.foreword') && !target.closest('.module-foreword')) {
                foreword.classList.remove('active')
                document.body.classList.remove('overflow')
                }
            })

            closeBtn.addEventListener('click', function (event) {
                foreword.classList.remove('active')
                document.body.classList.remove('overflow')
            })

            shadow.addEventListener('click', function (event) {
                foreword.classList.remove('active')
                document.body.classList.remove('overflow')
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
