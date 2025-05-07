<script setup>
import IconPDF from './icons/IconPDF.vue'
</script>

<template>
  <button
    type="button"
    title="Click to download PDF"
    class="btn-fixed flex flex-col items-center justify-center"
  >
    <IconPDF />
    <span class="hidden lg:block">Download</span>
  </button>
</template>
