<script setup>
import SectionCommonBlock from './sections/SectionCommonBlock.vue'
import IconSkill from './icons/IconSkill.vue'
import IconTrophy from './icons/IconTrophy.vue'
import IconEducation from './icons/IconEducation.vue'
import SectionSkill from './sections/SectionSkill.vue'
import SectionCommonBody from './sections/SectionCommonBody.vue'
import { defineProps } from 'vue'

const props = defineProps({
  skill: Object,
  education: Object,
  certificate: Object,
})
</script>

<template>
  <div class="w-full h-full flex flex-col md:gap-12 gap-4 bg-gray-200 p-3 rounded-sm">
    <!-- skill -->
    <SectionCommonBlock>
      <template #icon>
        <IconSkill />
      </template>
      <template #title>{{ props.skill.title }}</template>
      <SectionSkill :skills="props.skill.descriptions" />
    </SectionCommonBlock>

    <!-- certificate -->
    <SectionCommonBlock>
      <template #icon>
        <IconTrophy />
      </template>
      <template #title>{{ props.certificate.title }}</template>
      <SectionCommonBody>
        <template #header>{{ props.certificate.name }}</template>
        <template #title>{{ props.certificate.sub }}</template>
        <template #datetime>{{ props.certificate.date }}</template>
      </SectionCommonBody>
    </SectionCommonBlock>
    <!-- education -->
    <SectionCommonBlock>
      <template #icon>
        <IconEducation />
      </template>
      <template #title>{{ props.education.title }}</template>
      <SectionCommonBody>
        <template #header>{{ props.education.name }}</template>
        <template #title>{{ props.education.sub }}</template>
        <template #datetime>{{ props.education.date }}</template>
      </SectionCommonBody>
    </SectionCommonBlock>
  </div>
</template>
