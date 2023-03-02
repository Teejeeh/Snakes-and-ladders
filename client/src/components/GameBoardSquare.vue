<template>
  <div class="board__square square"
    :class="'square--'+square.type"
    :style="{'grid-area':'square'+(square)}">
    <span  class="square__number">{{square}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      square: Number
    },
    computed: {
      squareText () {
        return this.square.type === 'goal' ? 'Goal' : this.square.number
      }
    }
  }
</script>
