<template>
    <div class="main">
            <div class="module poems">
                <div class="module-center">
                    <div :class="`module-line poem-0${collection.color}`">
                        <img class="image" :src="`../files/poems/${collection.logo}`">
                    </div>
                    <h2 class="module-title">
                        «{{collection.name}}»
                    </h2>
                    <div class="module-text">
                        <i>
                            {{collection.titel}}
                        </i>
                    </div>
                    <div :class="`module-foreword foreword-0${collection.color}`">
                        <div class="link-more">
                            <img class="icon intro" src="@/assets/svg/intro.svg"/>
                            <div class="text">Предисловие</div>
                            <img class="icon" src="@/assets/svg/more.svg"/>
                        </div>
                    </div>
                    <div class="module-content">
                        <div class="grid poems collection">
                            <div v-for="column in partPoems" class="column">
                                <router-link v-for="(item, index) in column" 
                                    :class="`item poem poem-0${collection.color}`" 
                                    :to="`/poems/${collection.id}/${item.id}`"
                                >
                                    <div class="poem-text">
                                        <div v-html="item.text"></div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div  :class="`foreword poem-0${collection.color}`">
        <div class="shadow"></div>
        <div class="content gallery">
            <button class="close">
                <img class="icon one" src="@/assets/svg/close_g.svg">
                <img class="icon two" src="@/assets/svg/close_y.svg">
            </button>
            <div class="poem-text">
                <div class="title bold">
                    «{{collection.name}}»
                </div>
                <div class="title">
                    Предисловие
                </div>
                <div class="text">
                    {{collection.titel}}
                </div>
                <div class="text quote">
                    {{collection.foreword }}
                </div>
                <div class="text">
                    {{collection.end }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useStore } from '../store/index'

export default {
    setup() {
        const userStore = useStore();
        return {
          userStore
        };
    },
    name: 'PoemsCollectionView',
    props: {
        msg: String
    },
    data () {
        return {
            collection: null,
            partPoems: null
         }
    },
    created(){
        this.collection = this.userStore.getCollection(this.$route.params.collection)
        let poems = this.collection.allPoems
        let arr1 = [];
        let arr2 = [];
        let arr3 = [];
        let arr4 = [];
        let total = poems.length;
        let delta = Math.trunc(total / 4);
        let index1 = 0;
        let count1 = (index1 + delta);
        let index2 = count1 + 1;
        let count2 = (index2 + delta);
        let index3 = count1 + 1;
        let count3 = (index2 + delta);      
        let index4 = count3 + 1;
        let count4 = total - 1;

        for(let i = index1; i <= count1; i++){
            arr1.push(poems[i])
        }
        for(let i = index2; i <= count2; i++){
            arr2.push(poems[i])
        }
        for(let i = index3; i <= count3; i++){
            arr3.push(poems[i])
        }
        for(let i = index4; i <= count4; i++){
            arr4.push(poems[i])
        }
        this.partPoems = [ arr1, arr2, arr3, arr4 ]
        console.log(this.partPoems)
      
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
