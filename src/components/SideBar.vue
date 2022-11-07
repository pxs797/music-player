<script setup>
import { ref } from 'vue'
import { HomeIcon, MagnifyingGlassIcon, BuildingLibraryIcon, HeartIcon } from '@heroicons/vue/20/solid'
import ItemsContainer from './ItemsContainer.vue';
const sideItems1 = ref([
  { id: 0, name: 'Home', icon: HomeIcon },
  { id: 0, name: 'Search', icon: MagnifyingGlassIcon },
  { id: 0, name: 'Library', icon: BuildingLibraryIcon }
])
const sideItems2 = ref([
  { id: 0, name: 'Liked', icon: HeartIcon },
  { id: 0, name: 'Search', icon: MagnifyingGlassIcon },
  { id: 0, name: 'Library', icon: BuildingLibraryIcon }
])
</script>

<template>
  <section class="sm:w-48 w-20 h-screen bg-stone-100">
    <items-container :side-items="sideItems1"></items-container>
    <items-container :side-items="sideItems2"></items-container>
  </section>
</template>
