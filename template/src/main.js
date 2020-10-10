import Vue from 'vue'
{{#router}}
import router from './router'
{{/router}}
{{#vuex}}
import store from './store'
{{/vuex}}
import "lib-flexible";
{{#vant}}
import Vant from 'vant';
import 'vant/lib/index.css';
{{/vant}}
import App from './App.vue'
{{#vant}}
Vue.use(Vant);
{{/vant}}
new Vue({
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  render: h => h(App)
}).$mount('#app')

