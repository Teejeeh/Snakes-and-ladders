<template>
  <div>
    <img :src="board.img" alt="" class="board">
    <transition-group
      name="move-piece"
      tag="div"
      class="board"
      :style="{ 'grid-template-areas': boardGrid }"
    >
      <game-board-piece
        v-for="(player, index) in players"
        :key="'player-' + index"
        :color="defs.playerColors[index]"
        :style="{
          'transition-duration': defs.transitionTime + 'ms',
        }"
        :player="player"
        :index="index"
      />
    </transition-group>
  </div>
</template>

<script>
import GameBoardPiece from "@/components/GameBoardPiece.vue";

export default {
  name: "board",
  props: {
    board: Object,
    players: Array,
    defs: Object,
  },
  components: {
    GameBoardPiece,
  },
  computed: {
    boardGrid() {
      let grid = "";
      let base = parseInt(this.board.base);
      for (let i = this.board.base - 1; i >= 0; i--) {
        let boardRow = '"';
        if (i % 2 === 0) {
          for (let k = i * base + 1; k < base * i + base + 1; k++) {
            boardRow += " square" + k;
          }
          boardRow += '"';
        } else {
          for (let k = base * i + base; k > i * base; k--) {
            boardRow += " square" + k;
          }
          boardRow += '"';
        }
        grid += boardRow;
      }
      return grid;
    },
  },
};
</script>
