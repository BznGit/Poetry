import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/style/less/style.less';

createApp(App).use(router).use(createPinia()).mount('#app')
