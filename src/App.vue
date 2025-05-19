<script setup>
import MySummary from './components/MySummary.vue'
import WorkExperience from './components/WorkExperience.vue'
import MyAddress from './components/MyAddress.vue'
import MyInformation from './components/MyInformation.vue'
import DownloadPDF from './components/DownloadPDF.vue'
import { useDataStore } from '@/stores/getData'
const data = useDataStore()
const summary = data.summary
const address = data.address
const experience = data.experience
const project = data.project
const skill = data.skill
const education = data.education
const certificate = data.certificate
const download = data.download
</script>

<template>
  <main class="flex justify-center">
    <div
      id="content-cv"
      class="w-full lg:max-w-screen-lg xl:max-w-screen-lg lg:my-8 p-2 flex flex-col gap-3 bg-white"
    >
      <!-- Row 1 -->
      <div class="flex flex-col md:flex-row gap-4">
        <div class="md:basis-2/3">
          <MySummary :summary="summary" />
        </div>
        <div class="md:basis-1/3">
          <MyAddress :address="address" />
        </div>
      </div>
      <!-- Row 2 -->
      <div class="flex flex-col-reverse md:flex-row gap-4">
        <div class="md:basis-2/3">
          <WorkExperience :project="project" :experience="experience" />
        </div>
        <div class="md:basis-1/3">
          <MyInformation :skill="skill" :education="education" :certificate="certificate" />
        </div>
      </div>
    </div>
  </main>
  <DownloadPDF :download="download" />
</template>
