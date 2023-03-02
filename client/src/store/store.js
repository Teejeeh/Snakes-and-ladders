import { createStore } from 'vuex'
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export const store = createStore({
  state: {
    board: {},
    game: {},
    defs: {
      transitionTime: 500,
      playerColors: ['red', 'blue', 'green', 'orange'],
    },
  },
  getters,
  mutations,
  actions,
})
