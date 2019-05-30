import Vue from 'vue'
import Router from 'vue-router'
import NavComponent from '@/components/NavComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        'left': NavComponent
      }
    }
  ]
})
