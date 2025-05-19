import { computed } from 'vue'
import { defineStore } from 'pinia'
import data from '@/assets/data.json'

export const useDataStore = defineStore('data', () => {
  const params = new URLSearchParams(window.location.search)
  const lang = computed(() => params.get('ln') || 'en')
  const dataByLn = data[lang.value]

  const summary = dataByLn.summary
  const address = dataByLn.address
  const experience = dataByLn.experience
  const project = dataByLn.project
  const skill = dataByLn.skill
  const education = dataByLn.education
  const certificate = dataByLn.certificate
  const download = dataByLn.download

  return { summary, address, experience, project, skill, education, certificate, download }
})
