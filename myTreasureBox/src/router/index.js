import Vue from 'vue';
import Router from 'vue-router';
import index from '@/modules/index/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: 'leftMenu',
          name: 'leftMenu',
          component: () => import('@/modules/index/leftMenu.vue'),
        }, {
          path: 'rightContent',
          name: 'rightContent',
          component: () => import('@/modules/index/rightContent.vue'),
        },
      ],
    },
  ],
});
