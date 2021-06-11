
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/views/Home.vue'
import NotFoumd from '@/views/views/NotFoumd.vue'
import NetWorkError from '@/views/views/NetWorkError.vue'
import services from '@/domain/services'
import event from '../domain/core/globalEvent'
import { finished } from 'stream'
 Vue.use(VueRouter)
 export default (progress) => {

  const routes = [
    {
      path: '/',
      name: 'Home',
      props: true,
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      props: true,
      component: () => import('@/views/views/About.vue')
    }
    ,
    {
      path: '/404',
      name: '404',
      props: true,
      component: NotFoumd,
    }
  
    ,
    {
      path: '/408',
      name: '408',
      props: true,
      component: NetWorkError,
    }
  
    ,
    {
      path: '*',
    redirect:{name:'404',params:{resource:'page'}}
    }
  ]

  const router = new VueRouter({
    mode: 'history',
    routes
  })

  router.beforeEach((routeTo, routeFrom, next) => {
    progress.start();
    event.route_before_each(routeTo, routeFrom)?
    next():false;

  });
  router.afterEach(() => {
    event.route_after_each()
    progress.done()

  });

  router.onError(error => {
    services.log(error,'Router')
  });

  return router; 

}

