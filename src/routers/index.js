import Vue from 'vue';
import Router from 'vue-router';
import Recipe from '../components/Recipe'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/recipe',
      name: 'recipe',
      component: Recipe
    },
  ]
});

export default router