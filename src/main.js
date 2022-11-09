import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'

const app = createApp(App)

app.component('Navbar, navbar')
app.use(router);
app.mount('#app');






