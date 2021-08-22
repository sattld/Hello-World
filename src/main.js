import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Rem from './rem'
import Way from './tools/httpWay'
Vue.config.productionTip = false
Rem();
Vue.prototype.POST = Way.POST;
Vue.prototype.POSTFILE = Way.POSTFILE;
router.beforeEach((to, from, next) => {
  if(to.text!=''){
    document.title = to.meta.text
  }
  next();
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
