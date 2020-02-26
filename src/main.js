import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Buefy from 'buefy';
import Home from './views/Home.vue';
import NotFound from './views/404.vue';

Vue.use(Buefy)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
      { path: '/', component: Home },
      { path: '*', component: NotFound },
  ],
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
