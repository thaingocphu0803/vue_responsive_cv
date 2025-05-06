<script setup>
import SectionAddress from './sections/SectionAddress.vue'
import IconMail from './icons/IconMail.vue'
import IconPhone from './icons/IconPhone.vue'
import IconLocate from './icons/IconLocate.vue'
import IconGitHub from './icons/IconGitHub.vue'
</script>

<template>
  <div class="flex flex-col gap-2 bg-gray-800 border-1 border-right p-3 rounded-sm">
    <!--mail-->
    <SectionAddress>
      <template #icon>
        <IconMail />
      </template>
      <a href="mailto:thaingocphu0803@gmail.com" target="_blank">mail</a>
    </SectionAddress>
    <!--phone-->
    <SectionAddress>
      <template #icon>
        <IconPhone />
      </template>
      <a href="tel:+84347079502">phone</a>
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
        locate
      </a>
    </SectionAddress>
    <!--git-->
    <SectionAddress>
      <template #icon>
        <IconGitHub />
      </template>
      <a href="https://github.com/thaingocphu0803" target="_blank">link</a>
    </SectionAddress>
  </div>
</template>
