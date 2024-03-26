<template>
    <div class="main">
            <div class="module events">
                <div class="module-center">
                    <h2 class="module-title">Выставки, галереи, события</h2>
                    <div class="module-content">
                        <div class="grid events">
                            <div 
                                v-for="(item, index) in events"
                                class="column"
                            >
                                <router-link :class="`item event ${item.active? 'active' : 'archive'}`"
                                    :to="`/events/${item.id}`"
                                >
                                    <div class="event-status">
                                        <div :class="item.active? 'active' : ''">сейчас</div>
                                        <div :class="!item.active? 'archive' : ''">в архиве</div>
                                    </div>
                                    <div class="event-media">
                                        <img class="image" :src="`./files/events/${item.img}`"/>
                                    </div>
                                    <div class="event-text">
                                        <div class="title" style="white-space: pre-wrap;">
                                            {{item.name}}
                                        </div>
                                        <div class="text" style="white-space: pre-wrap;">
                                            {{item.titel}}
                                        </div>
                                    </div>
                                    <div class="event-info">
                                        <div class="location">
                                            <div class="icons">
                                                <img class="image active" src="@/assets/svg/map_pointer_y.svg">
                                                <img class="image archive" src="@/assets/svg/map_pointer_y.svg">
                                            </div>
                                            <div class="text">
                                            {{ item.place }}
                                            </div>
                                        </div>
                                        <div class="date">
                                            <div class="icons">
                                                <img class="image" src="@/assets/svg/time_g.svg">
                                            </div>
                                            <div class="text">
                                                <div class="row">{{item.time}}</div>
                                            </div>
                                        </div>
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

export default {
    setup () {
        const userStore = useStore()
        return { userStore }
  },
  name: 'EventsView',
  props: {
    msg: String
  },

  data () {
    return {
        events: this.userStore.getEvents,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
