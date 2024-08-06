import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import '@/style/less/style.less';
import VueAudioPlayer from "@liripeng/vue-audio-player";
//import "@liripeng/vue-audio-player/lib/vue-audio-player.css";

import errorimage from '@/assets/svg/img_error.svg'
//const errorimage = require('@/assets/svg/imgError.svg')
const VueLazyloadOptions = {
    preLoad: 1.3,
    error: errorimage,
   // loading: loadimage,
    attempt: 1
}

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(VueLazyload, VueLazyloadOptions)
app.use(VueAudioPlayer)
app.mount('#app')
