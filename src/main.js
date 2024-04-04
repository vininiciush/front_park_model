import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import $bus from './utils/Events'

const app = createApp(App);

app.use(router);
app.provide('$bus', $bus);

app.mount('#app');