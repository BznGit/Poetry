<template>
<div class="main">
            <div class="module contacts">
                <div class="module-center">
                    <div class="module-line contacts">
                        <img class="image" src="@/assets/svg/contacts_pic.svg">
                    </div>
                    <h2 class="module-title">Контактная информация</h2>
                    <div class="module-text">
                        <i>Свяжитесь с И. Я. Булгаковым удобным способом</i>
                    </div>
                    <div class="module-content">
                        <div class="box primary contacts">
                            <form :class="`form ${sended? 'send':''}`">
                                <label :class="`form-field ${errorName? 'error':''}`">
                                    <input v-model.trim="name" class="field input" type="text" required/>
                                    <span class="name" >*Имя</span>
                                    <span class="error">Некорректно заполнено поле</span>
                                </label>
                                <label :class="`form-field ${errorMail? 'error':''}`" >
                                    <input v-model.trim="mail"  class="field input" type="text" required/>
                                    <span class="name">*Эл. почта</span>
                                    <span class="error">Некорректно заполнено поле</span>
                                </label>
                                <label class="form-field" >
                                    <textarea v-model.trim="text" class="field text" rows="10" required></textarea>
                                    <span class="name">*Текст</span>
                                    <span class="error active">Некорректно заполнено поле</span>
                                </label>
                                <label class="form-field checkbox">
                                    <input v-model.trim="checked" class="field" type="checkbox" required/>
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
                                    <button class="button primary yellow"  :disabled ="disabled" @click.prevent="send">отправить</button>
                                    <div class="error ">Ошибка. Проверьте правильность заполнения полей.</div>
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
export default {
  name: 'ContactsView',
  props: {
    msg: String
  },
    data () {
        return {
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
            if((this.name.length != 0) && (this.mail.length != 0) && this.checked ) this.disabled = false; else this.disabled = true
 
        },
        send(){
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
                console.log('php>',data)
                if(data.status =='OK') this.sended = true
                if(data.status =='OPSKFAIL') alert('Неверное кодовое слово')
                if(data.status =='FAIL') alert('Ошибка сервера')
            })
            .catch(error => console.log(error));
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
