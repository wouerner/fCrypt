import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Key from '@/components/Key'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/key',
      name: 'Key',
      component: Key
    }
  ]
})
