import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import scrollAnimation from "./directives/scrollanimation";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('scroll-animation', scrollAnimation)

app.mount('#app')
