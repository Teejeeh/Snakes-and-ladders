<template>
  <div 
    :class="[current ? 'font-bold' : 'font-normal', 'piece']"
    :style="{ color: color }" >
      <div class="text-md">
        Player {{ index +1 }}
      </div>
  </div>
</template>

<script>
export default {
  props: {
    player: Object,
    index: Number,
    current: Boolean,
    color: String,
  },
  computed: {
  },
};
</script>
