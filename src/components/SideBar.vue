<script setup>
import { HomeIcon } from '@heroicons/vue/20/solid'
</script>

<template>
  <section class="sm:w-48 w-20 h-screen bg-gray-100 py-5">
    <h3 class="m-4 sm:text-sm text-xl text-center">🎵&nbsp;
      <span class="text-blue-500 sm:inline-block hidden">Mark's&nbsp;</span>
      <span class="sm:inline-block hidden">Music&nbsp;Player</span>
    </h3>
    <ul class="grid sm:grid-cols-3 grid-cols-1 gap-3 m-4">
      <li
        class="flex justify-center items-center aspect-square bg-black bg-opacity-10 rounded-md text-white hover:text-blue-500 cursor-pointer"
        v-for="item in 5" :key="item"
      >
        <home-icon class="h-5"></home-icon>
      </li>
    </ul>
  </section>
</template>
