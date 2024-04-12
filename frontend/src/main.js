import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import '@/style/less/style.less';
const loadimage = require('@/assets/svg/imgPlaceholder.svg')
const errorimage = require('@/assets/svg/imgError.svg')
createApp(App).use(router).use(createPinia()).use(VueLazyload, {
    preLoad: 1.3,
    error: errorimage,
    loading: loadimage,
    attempt: 1
  }).mount('#app')
