<script setup>
const props = defineProps({
  sideItems: {
    type: Array,
    default: () => {
      return []
    }
  }
})
</script>

<template>
  <ul class="mt-4">
    <li
      class="text-stone-700 cursor-pointer flex items-center py-2 px-6"
      v-for="sideItem in sideItems" :key="sideItem.id"
    >
      <component :is="sideItem.icon" class="h-5 pr-2"></component>
      {{ sideItem.name }}
    </li>
  </ul>
</template>