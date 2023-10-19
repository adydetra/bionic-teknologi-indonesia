<template>
  <header class="flex justify-center flex-col items-center">
    <img alt="Vue logo" class="my-6 w-20" src="@/assets/logo.svg" />
    <nav class="space-x-5">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/test/css">CSS Test</RouterLink>
      <RouterLink to="/test/api">Api Test</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>