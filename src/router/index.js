import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import ViniciusFogaca from '@/components/ViniciusFogaca';
import Menu from '@/components/Menu';
import Contador from '@/components/Contador';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu,
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/sobre',
      name: 'ViniciusFogaca',
      component: ViniciusFogaca,
    },
    {
      path: '/contador',
      name: 'contador',
      component: Contador,
    },
  ],
});
