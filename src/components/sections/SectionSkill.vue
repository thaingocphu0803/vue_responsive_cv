<script setup>
import { ref } from 'vue'
import IconItemSkill from '../icons/IconItemSkill.vue'

const skills = ref(['ok1 ', 'ok2', 'ok3', 'ok4', 'ok5', 'ok6'])
</script>

<template>
  <div v-for="(skill, index) in skills" :key="index" class="flex items-center gap-11 ps-2">
    <div class="text-amber-600">
      <IconItemSkill />
    </div>
    <div class="text-gray-800 uppercase text-sm tracking-wider">{{ skill }}</div>
  </div>
</template>
