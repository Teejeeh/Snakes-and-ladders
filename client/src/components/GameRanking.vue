<template>
  <div class="ranking text-right">
      <game-ranking-player
        v-for="(player, index) in players"
        :key="index"
        :player="player"
        :index="index"
        :color="defs.playerColors[index]"
        :current="index == actualPlayer"
      >
      </game-ranking-player>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GameRankingPlayer from "@/components/GameRankingPlayer.vue";

export default {
  components: {
    GameRankingPlayer,
  },
  props: {
    game: Object,
    defs: Object,
  },
  computed: {
    ...mapGetters(["players", "actualPlayer"]),
  },
};
</script>
