<script setup>
import SectionCommonBlock from './sections/SectionCommonBlock.vue'
import IconSkill from './icons/IconSkill.vue'
import IconTrophy from './icons/IconTrophy.vue'
import IconEducation from './icons/IconEducation.vue'
import SectionSkill from './sections/SectionSkill.vue'
import SectionCommonBody from './sections/SectionCommonBody.vue'
</script>

<template>
  <div class="flex flex-col justify-center gap-12 bg-gray-200 border-1 border-right p-3 rounded-sm">
    <!-- skill -->
    <SectionCommonBlock>
      <template #icon>
        <IconSkill />
      </template>
      <template #title>oke oke oek</template>
      <SectionSkill />
    </SectionCommonBlock>

    <!-- certificate -->
    <SectionCommonBlock>
      <template #icon>
        <IconTrophy />
      </template>
      <template #title>oke oke cert</template>
      <SectionCommonBody>
        <template #header>header</template>
        <template #title>title</template>
        <template #datetime>datetime</template>
      </SectionCommonBody>
    </SectionCommonBlock>
    <!-- education -->
    <SectionCommonBlock>
      <template #icon>
        <IconEducation />
      </template>
      <template #title>oke oke oek</template>
      <SectionCommonBody>
        <template #header>header</template>
        <template #title>title</template>
        <template #datetime>datetime</template>
      </SectionCommonBody>
    </SectionCommonBlock>
  </div>
</template>
