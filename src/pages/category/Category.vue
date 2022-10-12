<script setup>
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { getCategory } from '@/api'

const route = useRoute()
const data = reactive({
  category: []
})

onMounted(async () => {
  data.category = await getCategory(route.params.id)
  console.log(data);
})
</script>

<template>
  <div>category</div>
</template>