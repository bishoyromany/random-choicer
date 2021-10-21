<script setup>
import { defineProps } from "vue";

const props = defineProps({
  classes: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="w-full py-2 px-3 max-w-lg rounded-md" :class="props.classes">
    <slot></slot>
  </div>
</template>
