<template>
  <div class="flex justify-start items-center gap-8 text-amber-600 hover:text-amber-700">
    <div class="border-1 rounded-full p-1">
      <slot name="icon"></slot>
    </div>
    <div class="text-lg font-medium">
      <slot></slot>
    </div>
  </div>
</template>
