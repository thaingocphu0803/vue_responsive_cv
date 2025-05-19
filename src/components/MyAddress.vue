<script setup>
import SectionAddress from './sections/SectionAddress.vue'
import IconMail from './icons/IconMail.vue'
import IconPhone from './icons/IconPhone.vue'
import IconLocate from './icons/IconLocate.vue'
import IconGitHub from './icons/IconGitHub.vue'
import { defineProps } from 'vue'
const props = defineProps({
  address: Object,
})
</script>

<template>
  <div
    class="w-full h-full flex flex-row flex-wrap justify-between md:flex-col gap-4 bg-gray-800 border-1 border-right p-3 rounded-sm"
  >
    <!--mail-->
    <SectionAddress>
      <template #icon>
        <IconMail />
      </template>
      <a href="mailto:thaingocphu0803@gmail.com" target="_blank">{{ props.address.email }}</a>
    </SectionAddress>
    <!--phone-->
    <SectionAddress>
      <template #icon>
        <IconPhone />
      </template>
      <a href="tel:+84347079502">{{ props.address.phone }}</a>
    </SectionAddress>
    <!--locate-->
    <SectionAddress>
      <template #icon>
        <IconLocate />
      </template>
      <a
        href="https://www.google.com/maps/place/Hu%E1%BB%B3nh+T%E1%BA%A5n+Ph%C3%A1t,+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam"
        target="_blank"
      >
        {{ props.address.location }}
      </a>
    </SectionAddress>
    <!--git-->
    <SectionAddress>
      <template #icon>
        <IconGitHub />
      </template>
      <a href="https://github.com/thaingocphu0803" target="_blank"> {{ props.address.github }} </a>
    </SectionAddress>
  </div>
</template>
