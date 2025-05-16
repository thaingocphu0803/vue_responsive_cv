import { computed } from 'vue'
import { defineStore } from 'pinia'

export const usePositionStore = defineStore('position', () => {
  const typePosition = {
    1: 'Full-Stack',
    2: 'Backend Developer',
    4: 'Frontend Developer',
    3: 'PHP Developer',
  }
  const params = new URLSearchParams(window.location.search)
  const id = computed(() => params.get('id') || 1)
  const position = computed(() => typePosition[id.value])

  return { id, position }
})
