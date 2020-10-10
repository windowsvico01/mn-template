import Vue from 'vue'
{{#plugins.router}}
import router from './router'
{{/plugins.router}}
{{#plugins.vuex}}
import store from './store'
{{/plugins.vuex}}
import "lib-flexible";
{{#plugins.vant}}
import Vant from 'vant';
import 'vant/lib/index.css';
{{/plugins.vant}}
import App from './App.vue'
{{#plugins.vant}}
Vue.use(Vant);
{{/plugins.vant}}
new Vue({
  {{#plugins.router}}
  router,
  {{/plugins.router}}
  {{#plugins.vuex}}
  store,
  {{/plugins.vuex}}
  render: h => h(App)
}).$mount('#app')

