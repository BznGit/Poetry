<template>

    <div class="main">
        <div class="module cart">
            <div class="module-center">
                <div class="module-line cart">
                    <img class="image" src="@/assets/svg/about_brush.svg">
                </div>
                <h2 class="module-title">Приобрести холсты</h2>
                <div class="module-text">
                    <i>
                        Для приобретения уникальных картин И. Я. Булгакова,<br/>
                        выберите их в галерее и заполните заявку
                    </i>
                </div>
                <div class="module-content">
                    <div class="grid cart">
                        <div v-for="(item, index) in userStore.getCart" :key="item.number" :class="`item painting item-0${index}`">
                            <div class="painting-delete" @click="deleteItem(item.number)">
                                <img class="image" src="@/assets/svg/close_w.svg"/>
                            </div>
                            <div class="painting-image">
                                <img class="image" :src="`./files/gallery/${item.img}`"/>
                            </div>
                            <div class="painting-info">
                                <div class="info">
                                    <div class="info-row">Картина № {{ item.number }}</div>
                                    <div class="info-row">{{item.material}}, {{item.paints}}, {{item.size}}. {{item.year}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid cart">

                        <div v-for="(item, index) in this.userStore.getCartBook" :key="item.id" :class="`item painting item-0${index}`">
                            <div class="painting-delete" @click="deleteItemBook(item.id)">
                                <img class="image" src="@/assets/svg/close_w.svg"/>
                            </div>
                            <div class="painting-image">
                                <img class="image" :src="`./files/books/${item.img}`"/>
                            </div>
                            <div class="painting-info">
                                <div class="info">
                                    <div class="info-row">{{ item.name }}</div>
                                    <div class="info-row"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="module contacts">
            <div class="module-center">
                <h2 class="module-title">Контактная информация</h2>
                <div class="module-text">
                    <i>Свяжитесь с И. Я. Булгаковым удобным способом</i>
                </div>
                <div class="module-content">
                    <div class="box primary contacts">
                        <form class="form">
                            <label class="form-field">
                                <input class="field input" type="text" required/>
                                <span class="name">*Имя</span>
                                <span class="error">Некорректно заполнено поле</span>
                            </label>
                            <label class="form-field">
                                <input class="field input" type="text" required/>
                                <span class="name">*Эл. почта</span>
                                <span class="error">Некорректно заполнено поле</span>
                            </label>
                            <label class="form-field checkbox">
                                <input class="field" type="checkbox" required/>
                                <span class="icons">
                                    <img class="icon one" src="@/assets/svg/checkbox.svg"/>
                                    <img class="icon two" src="@/assets/svg/checkbox_on.svg"/>
                                </span>
                                <span class="text">
                                    Подтверждаю согласие
                                    с&nbsp;<a href="/policy">политикой обработки персональных данных</a>
                                </span>
                                <span class="error">Некорректно заполнено поле</span>
                            </label>
                            <div class="buttons">
                                <button class="button primary yellow" disabled type="submit">отправить</button>
                                <div class="error">Ошибка. Проверьте правильность заполнения полей.</div>
                            </div>
                        </form>
                        <div class="message">
                            Спасибо, письмо отправлено
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
    name: 'CartView',
    props: {
        msg: String
    },
    data(){
        return{
            paints: this.userStore.getCart,
            book: this.userStore.getCartBook
        }
    },
    methods:{
        deleteItem(number){
            console.log('delete', number)
            this.userStore.deleteItemFromCart(number)
    
        },
        deleteItemBook(id){
            console.log('delete', id)
            this.userStore.deleteBookFromCart(id)
        }
    }, 


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
