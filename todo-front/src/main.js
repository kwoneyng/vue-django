import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 만약 폴더만 지정해놓고 어떤 파일인지 등록하지 않았으면 폴더 안의 index.js파일을 찾아감
import BootstrapVue from 'bootstrap-vue'
import VueSession from 'vue-session'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
Vue.use(BootstrapVue)
Vue.use(VueSession)  // 앞으로 Vue에서 Vuesession 사용할 수 있음
Vue.config.productionTip = false
new Vue({
 router,
 store,
 render: h => h(App)
}).$mount('#app')