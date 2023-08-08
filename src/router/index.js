import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home');
const Learning = () => import('@/views/Learning');
const Protfolio = () => import('@/views/Protfolio');
const About = () => import('@/views/About');
const Course = () => import('@/views/Course');
const Self = () => import('@/views/Self');

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/learning',
    component: Learning,
    children: [
      {
        path: '/',
        component: Course
      },
      {
        path: '/learning/course',
        component: Course
      },
      {
        path: '/learning/self',
        component: Self
      }
    ]
  },
  {
    path: '/protfolio',
    component: Protfolio
  },
]

const router = new VueRouter({
  // mode: "history",
  routes
})

export default router
