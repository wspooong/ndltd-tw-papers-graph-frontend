/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import router from './router'


// Composables
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGtagPlugin from 'vue-gtag'

const app = createApp(App)
const pinia = createPinia()

registerPlugins(app)

app.use(router)
app.use(pinia)
app.use(VueGtagPlugin, {
    config: { id: 'G-JR8F0BXDB8' }
    }, router
)
app.mount('#app')
