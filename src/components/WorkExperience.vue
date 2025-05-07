<script setup>
import IconWork from './icons/IconWork.vue'
import IconProject from './icons/IconProject.vue'
import SectionCommonBlock from './sections/SectionCommonBlock.vue'
import SectionCommonBody from './sections/SectionCommonBody.vue'
import SectionCommonDesc from './sections/SectionCommonDesc.vue'
</script>

<template>
  <div class="w-full h-full flex flex-col gap-12 p-3">
    <!-- work experiences -->
    <SectionCommonBlock>
      <template #icon>
        <IconWork />
      </template>
      <template #title>Paragraph example 1: about Bali</template>
      <div class="flex flex-col gap-8">
        <SectionCommonBody>
          <template #header>Paragraph example 1: about Bali</template>
          <template #title>Paragraph example 1: about Bali</template>
          <template #datetime>Paragraph example 1: about Bali</template>
          <ul class="mt-6">
            <SectionCommonDesc
              >Bali is predominantly a Hindu country. Bali is known for its elaborate, traditional
              dancing. The dancing is inspired by its Hindi beliefs.</SectionCommonDesc
            >
            <SectionCommonDesc
              >Most of the dancing portrays tales of good versus evil.
            </SectionCommonDesc>
            <SectionCommonDesc
              >To watch the dancing is a breathtaking experience. Lombok has some impressive points
              of interest – the majestic Gunung Rinjani is an active volcano.</SectionCommonDesc
            >
            <SectionCommonDesc
              >It is the second highest peak in Indonesia. Art is a Balinese passion. Batik
              paintings and carved statues make popular souvenirs.</SectionCommonDesc
            >
          </ul>
        </SectionCommonBody>

        <SectionCommonBody>
          <template #header>Paragraph example 1: about Bali</template>
          <template #title>Paragraph example 1: about Bali</template>
          <template #datetime>Paragraph example 1: about Bali</template>
          <ul class="mt-6">
            <SectionCommonDesc
              >Bali is predominantly a Hindu country. Bali is known for its elaborate, traditional
              dancing. The dancing is inspired by its Hindi beliefs.</SectionCommonDesc
            >
            <SectionCommonDesc
              >Most of the dancing portrays tales of good versus evil.
            </SectionCommonDesc>
            <SectionCommonDesc
              >To watch the dancing is a breathtaking experience. Lombok has some impressive points
              of interest – the majestic Gunung Rinjani is an active volcano.</SectionCommonDesc
            >
            <SectionCommonDesc
              >It is the second highest peak in Indonesia. Art is a Balinese passion. Batik
              paintings and carved statues make popular souvenirs.</SectionCommonDesc
            >
          </ul>
        </SectionCommonBody>
      </div>
    </SectionCommonBlock>

    <!-- project -->
    <SectionCommonBlock>
      <template #icon>
        <IconProject />
      </template>
      <template #title>Paragraph example 1: about Bali</template>
      <SectionCommonBody>
        <template #header>Paragraph example 1: about Bali</template>
        <template #title>Paragraph example 1: about Bali</template>
        <template #demo>Paragraph example 1: about Bali</template>
        <template #github>Paragraph example 1: about Bali</template>
        <template #datetime>Paragraph example 1: about Bali</template>
        <ul class="mt-6">
          <SectionCommonDesc
            >Bali is predominantly a Hindu country. Bali is known for its elaborate, traditional
            dancing. The dancing is inspired by its Hindi beliefs.</SectionCommonDesc
          >
          <SectionCommonDesc
            >Most of the dancing portrays tales of good versus evil.
          </SectionCommonDesc>
          <SectionCommonDesc
            >To watch the dancing is a breathtaking experience. Lombok has some impressive points of
            interest – the majestic Gunung Rinjani is an active volcano.</SectionCommonDesc
          >
          <SectionCommonDesc
            >It is the second highest peak in Indonesia. Art is a Balinese passion. Batik paintings
            and carved statues make popular souvenirs.</SectionCommonDesc
          >
        </ul>
      </SectionCommonBody>
    </SectionCommonBlock>
  </div>
</template>
