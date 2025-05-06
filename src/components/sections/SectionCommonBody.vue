<template>
  <div class="flex flex-col justify-center">
    <span class="text-gray-900 text-lg font-bold tracking-widest">
      <slot name="header"></slot>
    </span>
    <span class="text-gray-900 text-base font-medium tracking-widest">
      <slot name="title"></slot>
    </span>
    <span class="text-amber-600 text-sm font-medium italic">
      <slot name="datetime"></slot>
    </span>
    <slot></slot>
  </div>
</template>
