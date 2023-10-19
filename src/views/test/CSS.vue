<template>
  <section class="grid grid-cols-8 text-center my-12 border-4 border-black">
    <div v-for="number in [1, 2, 3]" :key="number" :class="['col-span-8', 'bg-blue-500', { 'lg:col-span-4': number === 2 || number === 3 }, box]">
      {{ number }}
    </div>
    <div class="col-span-8 lg:col-span-5 grid grid-cols-9 p-3 bg-blue-500 border-4 border-black">
      <div
        v-for="number in [4, 5, 6, 7]"
        :key="number"
        :class="['flex items-center justify-center col-span-' + (number === 4 ? 9 : 3), 'bg-' + (number === 4 ? 'red' : 'blue') + '-500', box]"
      >
        {{ number }}
      </div>
    </div>
    <div class="col-span-8 lg:col-span-3 flex lg:flex-col justify-center space-x-4 lg:space-x-0 lg:space-y-4 border-4 border-black p-3 bg-blue-500">
      <div v-for="number in [8, 9, 10]" :key="number" class="bg-red-500" :class="box">{{ number }}</div>
    </div>
  </section>

  <section class="hidden md:block relative w-[60%] h-[250px] border-4 border-black bg-blue-500 float-left">
    <div v-for="(item, index) in items" :key="index" class="absolute" :class="item.class"></div>
  </section>
  <div class="flex justify-end">
    <img alt="Vue logo" class="hidden md:block w-20" src="@/assets/logo.svg" />
  </div>
</template>

<script setup>
const box = "text-white border-4 border-black p-4 w-full";
const items = [
  { class: "top-0 left-0 w-40 h-20 bg-red-500" },
  { class: "top-10 left-20 w-40 h-40 bg-white" },
  { class: "bottom-0 left-40 w-40 h-20 bg-red-500" },
  { class: "top-0 -right-20 w-40 h-20 bg-red-500" },
  { class: "bottom-0 -right-60 w-40 h-20 bg-red-500" },
];
</script>
