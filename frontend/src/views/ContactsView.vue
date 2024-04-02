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
                            <form class="form">
                                <label class="form-field">
                                    <input class="field input" type="text" required/>
                                    <span class="name" >*Имя</span>
                                    <span class="error">Некорректно заполнено поле</span>
                                </label>
                                <label class="form-field">
                                    <input class="field input" type="text" required/>
                                    <span class="name">*Эл. почта</span>
                                    <span class="error">Некорректно заполнено поле</span>
                                </label>
                                <label class="form-field">
                                    <textarea class="field text" rows="10" required></textarea>
                                    <span class="name">*Текст</span>
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
                                Спасмбо, письмо отправлено
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
