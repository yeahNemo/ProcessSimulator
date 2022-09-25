import { Button, Col, Field, Icon, NavBar, NoticeBar, Row, Stepper, Swipe, SwipeItem, Switch, Tabbar, TabbarItem, Toast } from 'vant'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Button)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Col)
Vue.use(Row)
Vue.use(Switch)
Vue.use(Toast)
Vue.use(Stepper)
Vue.use(Field)
Vue.use(NoticeBar)
Vue.use(Swipe)
Vue.use(SwipeItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
