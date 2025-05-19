<script setup>
import IconWork from './icons/IconWork.vue'
import IconProject from './icons/IconProject.vue'
import SectionCommonBlock from './sections/SectionCommonBlock.vue'
import SectionCommonBody from './sections/SectionCommonBody.vue'
import SectionCommonDesc from './sections/SectionCommonDesc.vue'
import { defineProps } from 'vue'

const props = defineProps({
  experience: Object,
  project: Object,
})
</script>

<template>
  <div class="w-full h-full flex flex-col gap-12 p-3">
    <!-- work experiences -->
    <SectionCommonBlock>
      <template #icon>
        <IconWork />
      </template>
      <template #title>{{ props.experience.title }}</template>
      <div class="flex flex-col gap-8">
        <SectionCommonBody v-for="(exp, index) in props.experience.exps" :key="index">
          <template #header>{{ exp.title }}</template>
          <template #title>{{ exp.sub }}</template>
          <template #datetime>{{ exp.date }}</template>
          <ul class="mt-6">
            <SectionCommonDesc v-for="(desc, index) in exp.descriptions" :key="index">
              {{ desc }}
            </SectionCommonDesc>
          </ul>
        </SectionCommonBody>
      </div>
    </SectionCommonBlock>

    <!-- project -->
    <SectionCommonBlock>
      <template #icon>
        <IconProject />
      </template>
      <template #title>{{ props.project.title }}</template>
      <SectionCommonBody v-for="(prj, index) in props.project.prjs" :key="index">
        <template #header>{{ prj.title }}</template>
        <template #title>{{ prj.sub }}</template>
        <template #demo>{{ prj.demo.title }}: {{ prj.demo.desc }}</template>
        <template #github>{{ prj.link.title }}: {{ prj.link.desc }}</template>
        <template #datetime>{{ prj.date }}</template>
        <ul class="mt-6">
          <SectionCommonDesc v-for="(desc, index) in prj.descriptions" :key="index">
            {{ desc }}
          </SectionCommonDesc>
        </ul>
      </SectionCommonBody>
    </SectionCommonBlock>
  </div>
</template>
