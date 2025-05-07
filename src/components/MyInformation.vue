<script setup>
import SectionCommonBlock from './sections/SectionCommonBlock.vue'
import IconSkill from './icons/IconSkill.vue'
import IconTrophy from './icons/IconTrophy.vue'
import IconEducation from './icons/IconEducation.vue'
import SectionSkill from './sections/SectionSkill.vue'
import SectionCommonBody from './sections/SectionCommonBody.vue'
</script>

<template>
  <div class="w-full h-full flex flex-col md:gap-12 gap-4 bg-gray-200 p-3 rounded-sm">
    <!-- skill -->
    <SectionCommonBlock>
      <template #icon>
        <IconSkill />
      </template>
      <template #title>Paragraph example 1</template>
      <SectionSkill />
    </SectionCommonBlock>

    <!-- certificate -->
    <SectionCommonBlock>
      <template #icon>
        <IconTrophy />
      </template>
      <template #title>Paragraph example 1</template>
      <SectionCommonBody>
        <template #header>Paragraph example 1</template>
        <template #title>Paragraph example 1</template>
        <template #datetime>Paragraph example 1</template>
      </SectionCommonBody>
    </SectionCommonBlock>
    <!-- education -->
    <SectionCommonBlock>
      <template #icon>
        <IconEducation />
      </template>
      <template #title>Paragraph example 1</template>
      <SectionCommonBody>
        <template #header>Paragraph example 1</template>
        <template #title>Paragraph example 1</template>
        <template #datetime>Paragraph example 1</template>
      </SectionCommonBody>
    </SectionCommonBlock>
  </div>
</template>
