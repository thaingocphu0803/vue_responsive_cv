<script setup>
import MySummary from './components/MySummary.vue'
import WorkExperience from './components/WorkExperience.vue'
import MyAddress from './components/MyAddress.vue'
import MyInformation from './components/MyInformation.vue'
import DownloadPDF from './components/DownloadPDF.vue'
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
          <MySummary />
        </div>
        <div class="md:basis-1/3">
          <MyAddress />
        </div>
      </div>
      <!-- Row 2 -->
      <div class="flex flex-col-reverse md:flex-row gap-4">
        <div class="md:basis-2/3">
          <WorkExperience />
        </div>
        <div class="md:basis-1/3">
          <MyInformation />
        </div>
      </div>
    </div>
  </main>
  <DownloadPDF />
</template>
