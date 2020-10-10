import Vue from 'vue'
{{#router}}
import router from './router'
{{/router}}
{{#vuex}}
import store from './store'
{{/vuex}}
import "lib-flexible";
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue'

Vue.use(Vant);
new Vue({
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  render: h => h(App)
}).$mount('#app')

