<template>
  <div flex justify-center m-5>
    <button
      border-none
      px-3
      py-2
      rounded-2
      text-white
      bg-green-600
      hover:bg-green-900
      cursor-pointer
      mx-2
      @click="toggleSize = !toggleSize"
    > 
      enlarge
    </button>
  </div>
  <div
    class="list"
    grid
    sm-grid-cols-2
    md-grid-cols-3
    lg-grid-cols-4
    transition-all-500
  >
    <RouterLink :to="`/${i}`" v-for="(img, i) in imgs" :key="img">
      <StartProxy
      :class="toggleSize ? 'm3':''"
        h-50
        overflow-hidden
        rounded-xl
        :duration="500"
        :port="`${i}`"
      >
          <ShowImg :src="img" alt="" />
      </StartProxy>
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import { StartProxy } from "../components/startPort/index";
import ShowImg from "./showImg.vue";
import { imgs } from "../composables/data";
import { ref } from "vue";
import { useStorage } from "@vueuse/core";

const toggleSize = useStorage('toggleSize',true);
</script>
<style lang=""></style>
  