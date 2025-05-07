<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div
    class="w-full h-full text-gray-800 bg-gray-200 p-3 rounded-sm flex flex-col xs:flex-row items-center gap-4"
  >
    <div class="basis-1/3 flex justify-center">
      <img
        src="../assets/logo.svg"
        alt=""
        class="object-cover object-center w-[150px] h-[150px] bg-white rounded-full border-5 border-amber-500 hover:border-amber-600"
      />
    </div>
    <div class="basis-2/3 flex flex-col justify-center">
      <div class="text-2xl font-bold">Paragraph example 1: about Bali</div>
      <div class="text-lg font-medium text-amber-600">Paragraph example 1: about Bali</div>
      <div class="font-medium text-sm text-wrap mt-3">
        Below are a series of poorly constructed paragraphs and possible solutions. Put yourself in
        the place of a teacher. Criticise the structure of each paragraph and suggest how it might
        be improved. Be very critical about how the paragraph is constructed and how well the ideas
        flow. There are quite a few examples to have a go at because being critical of the work of
        others is difficult but gets easier the more you practice.
      </div>
    </div>
  </div>
</template>
