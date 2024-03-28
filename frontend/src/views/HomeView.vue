<template>
 
         <div class="slider primary index" data-slider="itc-slider" data-loop="true">
            <router-link class="slider__wrapper" to="/events">
                <SliderBanner />
                <button class="slider__btn slider__btn_prev">
                    <img src="@/assets/svg/prev_y.svg">
                </button>
                <button class="slider__btn slider__btn_next">
                    <img src="@/assets/svg/next_y.svg">
                </button>
                <ol class="slider__indicators">
                    <li class="slider__indicator slider__indicator_active" data-slide-to="0"></li>
                    <li class="slider__indicator" data-slide-to="1"></li>
                    <li class="slider__indicator" data-slide-to="2"></li>
                </ol>
            </router-link>
        </div>
        <div class="main">
            <div class="module paintings">
                <div class="module-center">
                    <h2 class="module-title">«{{gallery.name}}»</h2>
                    <div class="module-text">
                        <i>{{gallery.titel}}</i>
                    </div>                
                    <div class="module-content">
                        <div class="grid paintings">
                            <div v-for="column in gallery.parts" :key="column"  class="column">
                                <router-link 
                                    v-for="item in column" 
                                    :key="item" :class="`item painting item-${item < 10? '0' + item : item}`"
                                    :to="`/gallery/`+ gallery.id +`/` + item.number"
                                >
                                    <div class="painting-image">
                                        <img class="image" :src="`./files/gallery/` + item.img"  loading="lazy"/>
                                    </div>
                                    <div class="painting-text">
                                        <div  class="align">
                                            <div v-html="item.poem"></div>
                                     
                                        </div>
                                    </div>
                                </router-link>
                            </div> 
                        </div>
                        <div class="slider primary" data-slider="itc-slider" data-loop="false">
                            <div class="slider__wrapper gallery">
                                <SliderGallery :data = "galleryMob.fullPaints" :galleryId="gallery.id" />
                            </div>
                        </div>
                    </div>

                    <div class="module-more">
                        <router-link class="link-more" :to="`/gallery/`+ gallery.id +`/` + 1">
                            <div class="text">Вся галерея</div>
                            <img class="icon" src="@/assets/svg/more.svg"/>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="module texts">
                <div class="module-center">
                    <h2 class="module-title">«{{collection.name}}»</h2>
                    <div class="module-text">
                        <i>
                            {{ collection.titel }}
                        </i>
                    </div>
                    <div class="module-content">
                        <div class="grid texts">
                            <router-link
                                v-for="item in 13" 
                                :class="`item text item-${item < 10? '0' + item : item}`"
                                :to="`/poems/${collection.id}/${collection.allPoems[item].id}`"
                            >
                            
                                <div class="align" v-html="collection.allPoems[item].text"></div>  
                            </router-link>
                         </div>
                        <div class="slider primary" data-slider="itc-slider" data-loop="false">
                            <div class="slider__wrapper collection">
                                <SliderPoemsMob1 :data="collection.allPoems" :collectionId="collection.id"  class="slider__items grid texts" />
                            </div>
                        </div>
                    </div>
                    <div class="module-more">
                        <router-link class="link-more" :to="`/poems/`+ collection.id">
                            <div class="text">Весь сборник</div>
                            <img class="icon" src="@/assets/svg/more.svg"/>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="module poems">
                <div class="module-center">
                    <h2 class="module-title">И так далее...</h2>
                    <div class="module-text">
                        <i>Поэтические тексты Игоря Булгакова из разных сборников</i>
                    </div>
                    <div class="module-content">
                        <div class="grid poems">
                            <div class="column">
                                <router-link class="item poem poem-01" :to="`/poems/` + poems[0].collection.id + `/`+ poems[0].poem.id">
                                    <div class="poem-text">
                                        <div v-html="poems[0].poem.text"></div>
                                    </div>
                                    <div class="poem-link">
                                        <div class="link-more" href="#">
                                            <div class="text">{{poems[0].collection.name}}</div>
                                            <img class="icon" src="@/assets/svg/more.svg"/>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                            <div class="column">
                                <router-link class="item poem poem-02" :to="`/poems/` + poems[1].collection.id + `/`+ poems[1].poem.id">
                                    <div class="poem-text">
                                        <div v-html="poems[1].poem.text"></div>
                                    </div>
                                    <div class="poem-link">
                                        <div class="link-more" href="#">
                                            <div class="text">{{poems[1].collection.name}}</div>
                                            <img class="icon" src="@/assets/svg/more.svg"/>
                                        </div>
                                    </div>
                                </router-link>
                                <router-link class="item poem poem-02" :to="`/poems/` + poems[2].collection.id + `/`+ poems[2].poem.id">
                                    <div class="poem-text">
                                        <div v-html="poems[2].poem.text"></div>
                                    </div>
                                    <div class="poem-link">
                                        <div class="link-more" href="#">
                                            <div class="text">{{poems[2].collection.name}}</div>
                                            <img class="icon" src="@/assets/svg/more.svg"/>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                            <div class="column">
                                <router-link class="item poem poem-03" :to="`/poems/` + poems[3].collection.id + `/`+ poems[3].poem.id">
                                    <div class="poem-text">
                                        <div v-html="poems[3].poem.text"></div>
                                    </div>
                                    <div class="poem-link">
                                        <div class="link-more" :href="`/poems/` + poems[3].collection.id">
                                            <div class="text">{{poems[3].collection.name}}</div>
                                            <img class="icon" src="@/assets/svg/more.svg"/>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                        <div class="slider primary" data-slider="itc-slider" data-loop="false">
                            <div class="slider__wrapper collection2">             
                                <SliderPoemsMob2 :data="poems"/>
                            </div>
                        </div>
                    </div>
                    <div class="module-more">
                        <router-link class="link-more" to="/poems">
                            <div class="text">Все сборники</div>
                            <img class="icon" src="@/assets/svg/more.svg"/>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="module books">
                <div class="module-center">
                    <h2 class="module-title">Книги</h2>
                    <div class="module-content">
                        <div class="grid books">
                            <router-link 
                                v-for="(item, index) in books"
                                class="item book" 
                                :to="`/books/${item.id}`"
                            >
                                <img class="book-image" :src="`./files/books/${item.img}`"/>
                            </router-link>
                        </div>
                        <div class="slider primary" data-slider="itc-slider" data-loop="false">
                            <div class="slider__wrapper books">
                                <SliderBooks :data="books"/>
                            </div>
                        </div>
                    </div>
                    <div class="module-more">
                        <router-link class="link-more" :to="`/books`">
                            <div class="text">Вся книги</div>
                            <img class="icon" src="@/assets/svg/more.svg"/>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
 
</template>

<script>
import { useStore } from '../store/index'
import SliderBanner from '../components/home/SliderBanner.vue'
import SliderGallery from '../components/home/SliderGallery.vue'
import SliderPoemsMob1 from '../components/home/SliderPoemsMob1.vue'
import SliderPoemsMob2 from '../components/home/SliderPoemsMob2.vue'
import SliderBooks from '../components/home/SliderBooks.vue'

export default {
  setup () {
    const userStore = useStore()
    return { userStore }
  },
  components: {
    SliderBanner, 
    SliderGallery,
    SliderPoemsMob1,
    SliderPoemsMob2,
    SliderBooks
  },
  name: 'HomeView',
  props: {
    msg: String
  },
  data () {
    return {
        gallery: this.userStore.getPartGallerys()[0],
        galleryMob: this.userStore.getAllGallerys()[0],
        collection: this.userStore.getPartCollections(),
        poems: this.userStore.getPartPoems(),
        books: this.userStore.getBooks
    }
  },
  mounted(){
    
    const paintings = document.querySelectorAll('.item.painting')
    paintings.forEach(function (painting) {
        const align = painting.querySelector('.align')
        const divs = align.querySelectorAll('div')
        const totalHeight = Array.from(divs).reduce((acc, div) => acc + div.offsetHeight, 0)

        const animationDuration = divs.length * 1.5

        align.style.transitionDuration = animationDuration + 's'

        painting.addEventListener('mouseenter', function () {
            align.style.transform = 'translateY(-' + totalHeight + 'px)'

            divs.forEach(function (div) {
                const rect = div.getBoundingClientRect()
                const textRect = painting.querySelector('.painting-text').getBoundingClientRect()
                if (rect.top <= textRect.top) {
                    div.style.opacity = '1'
                }
            })
        })
        painting.addEventListener('mouseleave', function () {
            align.style.transform = 'none'
        })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>.
