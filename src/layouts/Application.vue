<script setup>
import SideBar from '@/components/SideBar.vue'
import Playground from '@/components/Playground.vue'
</script>

<template>
  <div class="w-screen h-screen overflow-hidden flex">
    <side-bar></side-bar>
    <playground>
      <slot></slot>
    </playground>
  </div>
</template>