<template>
  <img :src="src" object-cover />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
const props = defineProps<{
  src: string;
}>();
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
