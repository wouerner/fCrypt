import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Key from '@/components/Key'
import Sign from '@/components/Sign'
import Verify from '@/components/Verify'

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
    },
    {
      path: '/sign',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/verify',
      name: 'Verify',
      component: Verify
    }
  ]
})
