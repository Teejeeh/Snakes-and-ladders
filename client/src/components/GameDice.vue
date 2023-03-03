<template>
  <div class="flex gap-2">
    <game-dice-die v-for="(diceDie, index) in dice" :key="index" :die="diceDie" />
  </div>
</template>

<script>
import GameDiceDie from "@/components/GameDiceDie.vue";

export default {
  components: {
    GameDiceDie,
  },
  props: {
    throw: Object,
  },
  data() {
    return {
      dice: []
    };
  },
  watch: {
    throw(new_dice, old_dice) {
      if (!new_dice.dice) return
      this.dice = new_dice.dice
    }
  },
};
</script>
