import Vue from 'vue'
import App from './App.vue'
import router from './router' // 폴더만 지정해 놓으면 폴더 안에 있는 index.js를 가져온다

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
