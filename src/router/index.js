import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dark from "../components/Dark";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dark',
      component: Dark
    }
  ]
})
