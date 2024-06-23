<template>

    <div class="main">
        <div class="module cart">
            <div class="module-center">
                <div class="module-line cart">
                    <img class="image" src="@/assets/svg/about_brush.svg">
                </div>
                <h2 class="module-title">Избранное</h2>
                <div class="module-text">
                    <i>
                        Здесь отложены понравившиеся вам холсты. <br/>
                        Вы всегда можете связаться с автором, чтобы обсудить их. <br/>
                        Для этого заполните форму обратной связи с вашим именем <br/>
                        и адресом электронной почты.
                    </i>
                </div>
                <div class="module-content">
                    <div class="grid cart">
                        <div v-for="(item, index) in userStore.getCart" :key="item.number" :class="`item painting item-0${index}`">
                            <div class="painting-delete" @click="deleteItem(item.number)">
                                <img class="image" src="@/assets/svg/close_w.svg"/>
                            </div>
                            <div class="painting-image">
                                <img class="image" v-lazy="`./files/gallery/${item.preview}`"/>
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
                                <img class="image" v-lazy="`./files/books/${item.img}`"/>
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
                        <form :class="`form ${sended? 'send':''}`">
                            <label :class="`form-field ${errorName? 'error':''}`">
                                <input v-model="name" class="field input" type="text" required/>
                                <span class="name">*Имя</span>
                                <span class="error">Некорректно заполнено поле</span>
                            </label>
                            <label :class="`form-field ${errorMail? 'error':''}`" >
                                <input v-model="mail" class="field input" type="text" required/>
                                <span class="name">*Эл. почта</span>
                                <span class="error">Некорректно заполнено поле</span>
                            </label>
                            <label class="form-field checkbox">
                                <input  v-model="checked" class="field" type="checkbox" required/>
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
                                <button class="button primary yellow" :disabled ="disabled" @click.prevent="send" type="submit">отправить</button>
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
            book: this.userStore.getCartBook,
            name: '',
            mail: '',
            text: '',
            checked: false,
            psk:'0xEA1B20D8FF1C45BA',
            disabled: true,
            sended: false,
            errorName: false, 
            errorMail: false
        }
    },
    watch:{
        name(old, yang){
            this.validation()  
        },
        mail(old, yang){
            this.validation()  
        },
        checked(old, yang){
            this.validation()  
        }
    },
    methods:{
        validation(){
            if(this.name.length == 0) this.errorName = true; else this.errorName = false;
            if(this.mail.length == 0) this.errorMail = true; else this.errorMail = false;
            if((this.name.length != 0) && (this.mail.length != 0) && this.checked )
              this.disabled = false; 
            else this.disabled = true

        },
        send(){

            let paintsText = ''; 
            let count1 = this.paints.length
            if(count1 > 0){
                paintsText = 'Номера выбранных картин: '; 
                this.paints.forEach((paint, index) => {
                    paintsText += '№ ' + paint.number + (index==count1 - 1? '.' : ', ' )
                });
                paintsText = paintsText + '\n'
            }
            let bookText = ''; 
            let count2 = this.book.length
            if(count2 > 0){
                bookText = 'Названия выбранных книг: '; 
                this.book.forEach((book, index) => {
                    bookText += '«' + book.name + '»' + (index==count2 - 1? '.' : ', ' )
                });
            }
            this.text = paintsText  +  bookText

            fetch('php/smail.php', {
                method: 'POST',
                mode: 'no-cors' ,
                credentials:'include' ,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    [
                        { name:"name", value: this.name },
                        { name:"mail", value: this.mail },
                        { name:"text", value: this.text },
                        { name:"psk",  value: this.psk  }
                    ]
                )
            })
            .then(res => res.json())
            .then(data => {

                if(data.status =='OK') this.sended = true
                if(data.status =='OPSKFAIL') alert('Неверное кодовое слово')
                if(data.status =='FAIL') alert('Ошибка ')
            })
            .catch(error => console.log(error));
        },
        deleteItem(number){
            this.userStore.deleteItemFromCart(number)
        },
        deleteItemBook(id){
            this.userStore.deleteBookFromCart(id)
        }
    }, 


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
