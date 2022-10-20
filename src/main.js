import { Button, Checkbox, Circle, Col, Dialog, Field, Icon, NavBar, NoticeBar, Picker, Row, Stepper, Swipe, SwipeItem, Switch, Tabbar, TabbarItem, Toast } from 'vant'
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
Vue.use(Picker)
Vue.use(Circle)
Vue.use(Checkbox)
Vue.use(Dialog)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
