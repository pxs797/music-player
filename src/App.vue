<script setup>
import { onMounted } from 'vue'
import { getToken } from './utils/auth.js'
import Application from '@/layouts/Application.vue'

onMounted(async () => {
  const { access_token: token} = await getToken()
  localStorage.setItem('token', token)
})

</script>

<template>
  <application>
    <router-view />
  </application>
</template>
