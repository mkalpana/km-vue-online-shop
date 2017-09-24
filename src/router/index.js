import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import AdminIndex from '@/pages/admin/Index';
import AdminNew from '@/pages/admin/New';
import AdminProducts from '@/pages/admin/Products';
import AdminEdit from '@/pages/admin/Edit';
import Cart from '@/pages/Cart';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: AdminIndex,
      children: [
        {
          path: 'new',
          name: 'New',
          component: AdminNew,
        },
        {
          path: '',
          name: 'Products',
          component: AdminProducts,
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: AdminEdit,
        },
      ],
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart,
    },
  ],
});
