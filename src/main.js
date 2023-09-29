import { createApp } from 'vue';
import App from './App.vue';
import store from './router/store'; // Импортируйте хранилище Vuex

Vue.config.productionTip = false;
const app = createApp(App);

// Используйте метод use для добавления хранилища Vuex к приложению
app.use(store);

app.mount('#app');