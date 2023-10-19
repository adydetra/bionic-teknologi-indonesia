<template>
  <main class="px-4">
    <Header/>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue"
</script>