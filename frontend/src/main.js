import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


createApp(App).use(router).mount('#app')

/*App.http.interceptors.push(function(request) {
    request.credentials = true
    return function(response) {
    };
  });/*/