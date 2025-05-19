<script setup>
import { defineProps } from 'vue'
import IconItemSkill from '../icons/IconItemSkill.vue'

const props = defineProps({
  skills: Array,
})
</script>

<template>
  <div v-for="(skill, index) in props.skills" :key="index" class="flex items-center gap-11 ps-2">
    <div class="text-amber-600">
      <IconItemSkill />
    </div>
    <div class="text-gray-800 uppercase text-sm tracking-wider">{{ skill }}</div>
  </div>
</template>
