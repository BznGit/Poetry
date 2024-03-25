<template>
    <div class="slider primary index" data-slider="itc-slider" data-loop="true">
            <router-link class="slider__wrapper" to="/events">
                <SliderBanner class="slider__items"/>
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
                                <router-link v-for="item in column" :key="item" class="item painting item-01" :to="`/`+ gallery.id +`/` + item.img">
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
                        <router-link class="link-more" :to="`/`+ gallery.id +`/` + gallery.paintings[0]">
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
                            <a class="item text item-01" href="#">
                                <div class="align">
                                    <div>И смех и грех</div>
                                    <div>Ты жизнь убил на то</div>
                                    <div>Что вывел формулу</div>
                                    <div>Что есть добро</div>
                                    <div>Что зло</div>
                                    <div>Причём понятья эти разделил</div>
                                    <div>Чем очень сильно удивил</div>
                                </div>
                            </a>
                            <a class="item text item-02" href="#">
                                <div class="align">
                                    <div>Мысль не видна</div>
                                    <div>Но виден результат</div>
                                    <div>Которому ты рад</div>
                                    <div>Или не рад</div>
                                </div>
                            </a>
                            <a class="item text item-03" href="#">
                                <div class="align">
                                    <div>Для каждого найдётся искушенье</div>
                                    <div>Вопрос лишь в том</div>
                                    <div>Готов ли к искупленью</div>
                                </div>
                            </a>
                            <a class="item text item-04" href="#">
                                <div class="align">
                                    <div>Любовь</div>
                                    <div>Это щедрый Божественный дар</div>
                                    <div>Влюблённость</div>
                                    <div>Пылающий страстью пожар</div>
                                    <div>Любовь</div>
                                    <div>Это то что даётся не всем</div>
                                    <div>Влюблённость</div>
                                    <div>Пожалуйста</div>
                                    <div>С кучей проблем</div>
                                </div>
                            </a>
                            <a class="item text item-05" href="#">
                                <div class="align">
                                    <div>Коль чувства только чистые в Душе</div>
                                    <div>То ты не здесь ещё</div>
                                    <div>Иль там уже</div>
                                </div>
                            </a>
                            <a class="item text item-06" href="#">
                                <div class="align">
                                    <div>Огонь Души</div>
                                    <div>Не подожжёт твой дом</div>
                                    <div>Отсутствие Огня Души</div>
                                    <div>Его остудит</div>
                                    <div>Но дом холодный не пригоден для жилья</div>
                                    <div>И вряд ли кто с тобой жить в этом доме будет</div>
                                </div>
                            </a>
                            <a class="item text item-07" href="#">
                                <div class="align">
                                    <div>Ты дружбу променял на сто рублей</div>
                                    <div>Оправдываясь тем что был голодный</div>
                                    <div>А говорят</div>
                                    <div>Грядущая зима</div>
                                    <div>Пообещала быть весьма холодной</div>
                                </div>
                            </a>
                            <a class="item text item-08" href="#">
                                <div class="align">
                                    <div>Что либо объяснить тому кто Вас не слышит</div>
                                    <div>Сложно</div>
                                    <div>Кто слушать не желает</div>
                                    <div>Не возможно</div>
                                </div>
                            </a>
                            <a class="item text item-09" href="#">
                                <div class="align">
                                    <div>Стараемся не видеть очевидное</div>
                                    <div>Особенно когда оно обидное</div>
                                    <div>Обидное увидеть нам обидно</div>
                                    <div>Глупцы мы</div>
                                    <div>Это очевидно</div>
                                </div>
                            </a>
                            <a class="item text item-10" href="#">
                                <div class="align">
                                    <div>Ты выше не продвинешься</div>
                                    <div>Пока</div>
                                    <div>Сознанье закрывают облака</div>
                                    <div>Когда разгонишь облака с Сознанья</div>
                                    <div>Тогда откроют Истинные Знанья</div>
                                </div>
                            </a>
                            <a class="item text item-11" href="#">
                                <div class="align">
                                    <div>Никто из нас понятья не имеет</div>
                                    <div>Что отдаёт за то</div>
                                    <div>Чем в данный миг владеет</div>
                                </div>
                            </a>
                            <a class="item text item-12" href="#">
                                <div class="align">
                                    <div>Картинки</div>
                                    <div>Те что открывает зренье</div>
                                    <div>Являют Суть</div>
                                    <div>Коль есть прозренье</div>
                                </div>
                            </a>
                            <a class="item text item-13" href="#">
                                <div class="align">
                                    <div>Другой молчит</div>
                                    <div>Крича Душой</div>
                                    <div>Ну что тут скажешь</div>
                                    <div>Он иной</div>
                                </div>
                            </a>
                        </div>
                        <div class="slider primary" data-slider="itc-slider" data-loop="false">
                            <div class="slider__wrapper collection">
                                <SliderPoemsMob1 :data="collection.allPoems" :collectionId="collection.id"  class="slider__items grid texts" />
                            </div>
                        </div>
                    </div>
                    <div class="module-more">
                        <router-link class="link-more" :to="`/`+ collection.id +`/` + collection.allPoems[0].id">
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
                                <router-link class="item poem poem-01" :to="`/` + poems[0].collection.id + `/`+ poems[0].poem.id">
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
                                <router-link class="item poem poem-02" :to="`/` + poems[1].collection.id + `/`+ poems[1].poem.id">
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
                                <router-link class="item poem poem-02" :to="`/` + poems[2].collection.id + `/`+ poems[2].poem.id">
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
                                <router-link class="item poem poem-03" :to="`/` + poems[3].collection.id + `/`+ poems[3].poem.id">
                                    <div class="poem-text">
                                        <div v-html="poems[3].poem.text"></div>
                                    </div>
                                    <div class="poem-link">
                                        <div class="link-more" :href="`/` + poems[3].collection.id + `/`+ 1">
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
                            <a class="item book" href="#">
                                <img class="book-image" src="@/assets/jpg/book01---Слова-рождённые-душой_800.jpg"/>
                            </a>
                            <a class="item book" href="#">
                                <img class="book-image" src="@/assets/jpg/book02---поэтические-полотна_800.jpg"/>
                            </a>
                            <a class="item book" href="#">
                                <img class="book-image" src="@/assets/jpg/book03_В_спираль_закрученная_мысль_800.jpg"/>
                            </a>
                            <a class="item book" href="#">
                                <img class="book-image" src="@/assets/jpg/book04---Звездопад-на-каждый-день_800.jpg"/>
                            </a>
                            <a class="item book" href="#">
                                <img class="book-image" src="@/assets/jpg/book05---Директория-любви_800.jpg"/>
                            </a>
                            <a class="item book" href="#">
                                <img class="book-image" src="@/assets/jpg/book06---Знакомьтесь-это-мы_800.jpg"/>
                            </a>
                        </div>
                        <div class="slider primary" data-slider="itc-slider" data-loop="false">
                            <div class="slider__wrapper books">
                                <SliderBooks :data="books" />
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
