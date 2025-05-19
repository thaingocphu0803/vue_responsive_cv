<script setup>
import IconPDF from './icons/IconPDF.vue'
import html2pdf from 'html2pdf.js'
import { usePositionStore } from '@/stores/getPosition'
import { defineProps } from 'vue'

const props = defineProps({
  download: String,
})

const downloadPDF = (id) => {
  const element = document.getElementById(id)
  const positionStore = usePositionStore()
  const positionTitle = positionStore.position.replace(' ', '-')
  const opt = {
    filename: `Thai-Ngoc-Phu_${positionTitle}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: 'avoid-all', before: '.break-before' },
  }

  html2pdf().set(opt).from(element).save()
}
</script>

<template>
  <button
    @click="downloadPDF('content-cv')"
    type="button"
    title="Click to download PDF"
    class="btn-fixed flex flex-col items-center justify-center"
  >
    <IconPDF />
    <span class="hidden lg:block first-letter:uppercase">{{ props.download }}</span>
  </button>
</template>
