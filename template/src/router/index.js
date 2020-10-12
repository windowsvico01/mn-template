import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/index.vue'

// import localStorage from '@/utils/localStorage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页'
    },
    component: Home,
    children: []
  }
]

const router = new VueRouter({
  routes
})



router.beforeEach((to, from, next) => {
  // const token = localStorage.get('token');
  // if (to.query.SharePeople) {
  //   localStorage.set('SharePeople', to.query.SharePeople)
  // }
  next()

  // document.title = to.meta.title
  // if (to.name == 'wxlogin' || to.name == 'clear') {
  //   next()
  // } else {
  //   if (!token) {
  //     next({ name: 'wxlogin' })
  //   }
  //   next()
  // }
})

export default router
