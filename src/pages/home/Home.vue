<script setup>
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { getCategories } from '@/api'

const router = useRouter()
const data = reactive({
  categories: []
})

onMounted(async () => {
  data.categories = await getCategories()
  console.log(data);
})

function getCategory(id) {
  router.push({
    name: 'category',
    params: {
      id
    }
  })
}

</script>

<template>
  <div class="p-2 h-full overflow-y-scroll">
    <ul class="grid sm:grid-cols-5 grid-cols-2 gap-2">
      <li
        class="text-ellipsis border rounded-lg whitespace-nowrap overflow-hidden"
        v-for="item in data.categories" :key="item.id"
        @click="getCategory(item.id)"
      >
        <img :src="item.icons[0].url" :alt="item.name" class="h-full object-cover">
      </li>
    </ul>
  </div>
</template>