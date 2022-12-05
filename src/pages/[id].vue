<template>
  <div>
    <div class="buttons" flex justify-center my-5>
      <button border-none px-3 py-2 rounded-2 text-white bg-gray-500 hover:bg-gray-700 cursor-pointer mx-2
        @click="back">
        Back
      </button>
      <button border-none px-3 py-2 rounded-2 text-white bg-green-600 hover:bg-green-900 cursor-pointer mx-2
        @click="enLarger">
        EnLarge
      </button>
      <button border-none px-3 py-2 rounded-2 text-white bg-green-600 hover:bg-green-900 cursor-pointer mx-2
        @click="reSize">
        ReSet
      </button>
    </div>
    {{ id }}
    <div flex flex-col items-center md-flex-row md-w-200 mx-auto>
      <StartProxy overflow-hidden rounded-xl :duration="500" :port="id" :style="{
        width: `${size}px`,
        height: `${size}px`,
      }">
      <ShowImg :src="imgs[+id]" alt="" />  
    </StartProxy>
      <span ml-5 flex-1>
        大慈树王消失后，贤者们找到了刚刚诞生的纳西妲，并接回须弥。当时的她幼小无力，贤者们便以“保护”的名义，将她囚禁在净善宫中，几乎不再过问
        [16] 。
        纳西妲深居净善宫内，向来不受重视，也很少被人提及。她一刻不停地学习各种知识，只为更快成长为一位合格的神明，尽早地开始引导国民。若不是“禁忌”的威胁日渐临近，她又何尝不想暂时休憩，亲眼去看看须弥的无数生灵？现在的她，只能于梦中遍览五彩斑斓的世间盛景。
        白草净华，幽宫启蛰 白草净华，幽宫启蛰
        在心灵的净土中，她与阳光和微风作伴，与人类和动物交友，一起讲故事，做游戏，唱刚刚学会的歌…她将最美好的向往尽数倾注于梦境，但无论夜晚如何喧闹，每当白日来临，她的身畔又会重归寂静。她悠悠起身。睡眼惺忪之际，孤独突如寒潮般袭来，她不由得抱紧了双肩
        [4] 。 角色能力</span>
    </div>
    <!-- <div flex flex-col items-center md-flex-row md-w-200 mx-auto>
      <span ml-5 flex-1>大慈树王消失后，贤者们找到了刚刚诞生的纳西妲，并接回须弥。当时的她幼小无力，贤者们便以“保护”的名义，将她囚禁在净善宫中，几乎不再过问
        [16] 。
        纳西妲深居净善宫内，向来不受重视，也很少被人提及。她一刻不停地学习各种知识，只为更快成长为一位合格的神明，尽早地开始引导国民。若不是“禁忌”的威胁日渐临近，她又何尝不想暂时休憩，亲眼去看看须弥的无数生灵？现在的她，只能于梦中遍览五彩斑斓的世间盛景。
        白草净华，幽宫启蛰 白草净华，幽宫启蛰
        在心灵的净土中，她与阳光和微风作伴，与人类和动物交友，一起讲故事，做游戏，唱刚刚学会的歌…她将最美好的向往尽数倾注于梦境，但无论夜晚如何喧闹，每当白日来临，她的身畔又会重归寂静。她悠悠起身。睡眼惺忪之际，孤独突如寒潮般袭来，她不由得抱紧了双肩
        [4] 。 角色能力</span>
      <StartProxy overflow-hidden rounded-xl :duration="500" :port="id" :style="{
        width: `${size}px`,
        height: `${size}px`,
      }"></StartProxy>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { imgs } from "@/composables/data";
import { useStorage } from "@vueuse/core";
import { onActivated, onMounted, ref } from 'vue';
import { useRoute, useRouter } from "vue-router";
import { StartProxy } from "../components/startPort/index";
import ShowImg from "./showImg.vue";
const route = useRoute();
const router = useRouter();
const id = ref(route.params.id as string)
const size = useStorage(`${id}`, 200);
const enLarger = () => {
  if (size.value) {
    size.value += 10;
  }
};
const reSize = () => {
  size.value = 200;
};

const back = () => {
  router.back();
};

// onMounted(() => {
//   onActivated(() => {
//     id.value = route.params.id as string
//   })
// })


</script>

<style scoped lang="less">

</style>
