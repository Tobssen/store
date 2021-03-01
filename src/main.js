import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).provide({ user: 'tobias' }).mount('#app')

export const state = reactive({ counter: 6 })
