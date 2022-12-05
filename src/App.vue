<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import {StarportCrarrier} from "./components/startPort/index";
import {portMap} from "./components/startPort/state"
const props = reactive<any[]>([])
watch(portMap,(val) => {
  props.splice(0,props.length);
  val.forEach(item => {
    props.push(item)
  })
  
})
</script>

<template>
  <nav>
    <div class="flex justify-center items-center mb-2">
      <router-link
        to="/"
        class="p-2 m-2 rounded-lg"
        active-class="bg-blue-500 text-white"
        >/</router-link
      >
      <router-link
        to="/foov"
        class="p-2 m-2 rounded-lg"
        active-class="bg-blue-500 text-white"
        >foo</router-link
      >
    </div>
  </nav>
  <RouterView v-slot="{Component}">
    <!-- <KeepAlive> -->
      <component :is="Component"></component>
    <!-- </KeepAlive> -->
  </RouterView>
  <StarportCrarrier/>
  {{props}} 
</template>
