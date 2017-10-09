import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/Home';
import Form from '@/components/Form/Form';
import List from '@/components/List/List';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/form',
      name: 'Form',
      component: Form,
    },
    {
      path: '/list',
      name: 'List',
      component: List,
    },
  ],
});
