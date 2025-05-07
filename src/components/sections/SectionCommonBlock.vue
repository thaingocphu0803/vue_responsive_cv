<template>
  <div class="flex flex-col gap-4">
    <!-- header -->
    <div class="flex items-center gap-8 text-gray-800">
      <div class="border-1 p-1 rounded-full">
        <slot name="icon"></slot>
      </div>
      <div class="text-xl font-bold uppercase">
        <slot name="title"></slot>
      </div>
    </div>
    <!-- body -->
    <div class="flex flex-col justify-center gap-2">
      <slot></slot>
    </div>
  </div>
</template>
