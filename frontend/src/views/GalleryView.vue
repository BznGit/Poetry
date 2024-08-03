<template>

<div class="main">
    <div class="module paintings">
        <div v-for="gallery in data" :key="gallery.id" class="module-center">
            <h2 class="module-title">«{{gallery.name}}»</h2>
            <div class="module-text">
                <i>{{gallery.titel}}</i>
            </div>
            <div class="module-foreword">
                <div class="link-more">
                    <img class="icon intro" src="@/assets/svg/intro.svg"/>
                    <div class="text">Предисловие</div>
                    <img class="icon" src="@/assets/svg/more.svg"/>
                </div>
            </div>
            <div class="module-content">
                <div class="grid paintings page">
                    <div v-for="column in gallery.parts" :key="column"  class="column">
                        <router-link 
                            v-for="item in column"
                            :key="item" 
                            :class="`item painting item-${item < 10? '0' + item : item}`"
                            :to="`/gallery/`+ gallery.id +`/` + item.number"
                        >
                            <button class="painting-buy">
                                <img class="icon" src="@/assets/svg/cart_w.svg">
                            </button>
                            <div class="painting-image">
                                <img class="image" :style="`min-height: ${getHeightKoef(item.size) * parseInt(item.height)}px; `" v-lazy="`./files/gallery/` + item.preview" />
                            </div>
                            <div class="painting-text">
                                <div  class="align">
                                    
                                    <div class="list" v-html="item.poem"></div>
                                </div>
                            </div>
                        </router-link>
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
                            «{{gallery.name}}»
                        </div>
                        <div class="title">
                            Предисловие
                        </div>
                        <div class="text">
                            {{gallery.titel}}
                        </div>
                        <div class="text" >
                            {{gallery.forfard1}}
                        </div>
                        <div class="text" >
                            {{gallery.forfard2}}
                        </div>
                        <div class="text" >
                            {{gallery.forfard3}}
                        </div>
                        <div class="quote">
                            {{ gallery.quote }}
                        </div>
                    </div>
                </div>
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
    name: 'GallaryView',
    props: {
        msg: String
    },
    data () {
        return {
            data: this.userStore.getPartGallerys(true),
        
         }
    },
    methods:{

    },
    mounted(){ 
        this.$Lazyload.$on('loaded', function ({ el }, formCache) {
            el.style.height  = 'auto'
            const paintings = el.parentNode.parentNode
            const align = paintings.querySelector('.align');
            const alignHeight = align.offsetHeight;
            const animationDuration = alignHeight * 0.05;
            align.style.transitionDuration = animationDuration + 's';

            function startAnimation() {
                align.style.transitionDuration = '0s';
                align.style.transform = 'translateY(0)';

                setTimeout(function() {
                    align.style.transitionDuration = animationDuration + 's';
                    align.style.transform = 'translateY(-' + alignHeight + 'px)';
                }, 100);
            }
            startAnimation(); // Запустить первую итерацию анимации сразу
            setInterval(startAnimation, 40000); // Повторять каждые 40 секунд
          
        })
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
        //   window.addEventListener('load', function() {

        //  });
    },
    beforeUnmount(){
        this.$Lazyload.$off('loaded')
    },
    methods: {
        getHeightKoef(text){
                let index = text.indexOf('x')
                if(index != -1){
                    let h = parseInt(text.substring(0, index))
                    let w = parseInt(text.substring(index + 1, text.length))
                    let k = w/h
                    return k  
                }
        }
    }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
