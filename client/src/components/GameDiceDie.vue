<template>
  <div
    class="w-24 h-24 bg-green-600 text-white font-bold text-xl rounded-md flex justify-center items-center"
    :style="{ 'background-color': defs.playerColors[previousPlayer] }"
  >
  {{die}}
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  props: {
    die: Number,
  },
  computed: {
    ...mapState([ 'defs']),
    ...mapGetters(["previousPlayer"]),
  },
};
</script>
