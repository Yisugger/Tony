import Vue from 'vue';
import Router from 'vue-router';
import myLogin from '@/components/myLogin';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myLogin',
      component: myLogin,
    },
  ],
});
