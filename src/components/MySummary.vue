<script setup>
import { usePositionStore } from '@/stores/getPosition'
import { defineProps } from 'vue'
const props = defineProps({
  summary: Object,
})
const positionStore = usePositionStore()
const position = positionStore.position
</script>

<template>
  <div
    class="w-full h-full text-gray-800 bg-gray-200 p-3 rounded-sm flex flex-col xs:flex-row items-center gap-4"
  >
    <div class="basis-1/3 flex justify-center">
      <img
        src="../assets/images/logo.webp"
        alt=""
        class="object-cover object-center w-[150px] h-[150px] bg-white rounded-full border-5 border-amber-500 hover:border-amber-600"
      />
    </div>
    <div class="basis-2/3 flex flex-col justify-center">
      <div class="text-2xl font-bold">{{ props.summary.name }}</div>
      <div class="text-lg font-medium text-amber-600">{{ position }}</div>
      <div class="font-medium text-sm text-wrap mt-3">{{ props.summary.desc }}</div>
    </div>
  </div>
</template>
