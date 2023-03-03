<template>
  <div class="piece" :style="{
    'grid-area': 'square' + position,
    'transition-duration': 500 + 'ms',
  }">
    <div class="piece__circle" :style="{ 'background-color': color }"></div>
  </div>
</template>
<script>
export default {
  props: {
    color: String,
    player: Object,
  },
  data() {
    return {
      position: 1
    }
  },
  methods: {
    updatePosition(newValue) {
      this.position = newValue
    }
  },
  watch: {
    player(new_throw, old_throw) {
      if (!new_throw.dice) return
      const dicethrow = new_throw.dice.reduce((a, b) => a + b, 0)

      // walk to dice throw
      // for (let i = 0; i < (newValue - this.position); i++) {
      this.updatePosition(this.position + dicethrow)
      // }

      // handle special move
      setTimeout(() => {
        this.updatePosition(new_throw.destination)
      }, 1000);

    }
  },
  async mounted() {
    if (this.player.destination) this.position = this.player.destination
  },
};

</script>

<style lang="scss">
.piece {
  transition: all 0.5s;
  position: relative;
}

.piece__circle {
  position: absolute;
  width: 15px;
  height: 15px;
  background: red;
  top: 10%;
  left: 10%;
  border-radius: 50%;
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.5), 0 0 0.5em 0 #00000088;
  transition: all 1s;
}

.piece:nth-last-child(2) .piece__circle {
  top: auto;
  bottom: 10%;
  background: blue;
}

.piece:nth-last-child(3) .piece__circle {
  left: auto;
  right: 10%;
  background: green;
}

.piece:nth-last-child(4) .piece__circle {
  left: auto;
  top: auto;
  bottom: 10%;
  right: 10%;
  background: orange;
}
</style>
