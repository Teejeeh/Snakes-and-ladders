<template>
  <div v-if="game" class='h-screen w-full max-h-screen flex flex-col flex-wrap'>
    <div class='relative flex-1'>
      <div class='relative w-full h-full '>
        <game-board v-if='board' :board="board" :players="players" :defs='defs' />
      </div>
    </div>

    <div class="menu flex-none flex justify-between p-4">
      <div class='game__players flex w-full space-x-4'>
        <button @click="move" type="button"
          class="inline-flex justify-center items-center flex-none w-32 rounded-md border border-transparent px-4 py-1 text-md font-bold text-white shadow-sm focus:outline-none"
          :style="{ 'background-color': defs.playerColors[actualPlayer] }">
          throw dice
        </button>
        <game-dice :throw='lastThrow' />
      </div>
      <div class='game__dice w-full'>
        <game-ranking :game='game' :defs='defs' v-if='game.players' />
      </div>
    </div>
  </div>
</template>

<script>
import GameBoard from '@/components/GameBoard.vue';
import GameRanking from '@/components/GameRanking.vue';
import GameDice from '@/components/GameDice.vue';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'game',
  components: {
    GameBoard,
    GameDice,
    GameRanking,
  },
  computed: {
    ...mapState(['game', 'board', 'defs']),
    ...mapGetters(["players", "actualPlayer", "lastThrow"]),
  },
  methods: {
    ...mapActions(['loadGame', 'loadBoard', 'move']),
  },
  async created() {
    const gameId = this.$route.params.id;

    await this.loadGame(gameId);
  },
};
</script>
