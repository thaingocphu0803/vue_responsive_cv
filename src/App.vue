<script setup>
import MySummary from './components/MySummary.vue'
import WorkExperience from './components/WorkExperience.vue'
import MyAddress from './components/MyAddress.vue'
import MyInformation from './components/MyInformation.vue'
import DownloadPDF from './components/DownloadPDF.vue'
</script>

<template>
  <main class="flex justify-center">
    <div class="w-[60vw] !my-8 p-2 grid grid-cols-[2fr_1fr] grid-rows-[auto_2fr] gap-4 bg-white">
      <MySummary />
      <MyAddress />
      <WorkExperience />
      <MyInformation />
    </div>
  </main>
  <DownloadPDF />
</template>
