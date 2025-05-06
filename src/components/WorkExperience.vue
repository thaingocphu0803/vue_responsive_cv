<script setup>
import IconWork from './icons/IconWork.vue'
import IconProject from './icons/IconProject.vue'
import SectionCommonBlock from './sections/SectionCommonBlock.vue'
import SectionCommonBody from './sections/SectionCommonBody.vue'
import SectionCommonDesc from './sections/SectionCommonDesc.vue'
</script>

<template>
  <div class="flex flex-col gap-12 p-3">
    <!-- work experiences -->
    <SectionCommonBlock>
      <template #icon>
        <IconWork />
      </template>
      <template #title>oke oke work</template>
      <div class="flex flex-col gap-12">
        <SectionCommonBody>
          <template #header>header</template>
          <template #title>title</template>
          <template #datetime>datetime</template>
          <ul class="!mt-4">
            <SectionCommonDesc>oke</SectionCommonDesc>
            <SectionCommonDesc>oke</SectionCommonDesc>
            <SectionCommonDesc>oke</SectionCommonDesc>
            <SectionCommonDesc>oke</SectionCommonDesc>
          </ul>
        </SectionCommonBody>

        <SectionCommonBody>
          <template #header>header</template>
          <template #title>title</template>
          <template #datetime>datetime</template>
          <ul class="!mt-4">
            <SectionCommonDesc>oke</SectionCommonDesc>
            <SectionCommonDesc>oke</SectionCommonDesc>
            <SectionCommonDesc>oke</SectionCommonDesc>
            <SectionCommonDesc>oke</SectionCommonDesc>
          </ul>
        </SectionCommonBody>
      </div>
    </SectionCommonBlock>

    <!-- skill -->
    <SectionCommonBlock>
      <template #icon>
        <IconProject />
      </template>
      <template #title>oke oke proj</template>
      <SectionCommonBody>
        <template #header>header</template>
        <template #title>title</template>
        <template #demo>demo</template>
        <template #github>gitlink</template>
        <template #datetime>datetime</template>
        <ul class="!mt-4">
          <SectionCommonDesc>oke</SectionCommonDesc>
          <SectionCommonDesc>oke</SectionCommonDesc>
          <SectionCommonDesc>oke</SectionCommonDesc>
          <SectionCommonDesc>oke</SectionCommonDesc>
        </ul>
      </SectionCommonBody>
    </SectionCommonBlock>
  </div>
</template>
