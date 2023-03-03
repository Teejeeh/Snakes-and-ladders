import Home from '@/views/Home.vue';
import Game from '@/views/Game.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/game/:id',
    name: 'game',
    component: Game,
  },
];

export default routes;
