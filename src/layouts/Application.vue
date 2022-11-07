<script setup>
import SideBar from '@/components/SideBar.vue'
import Playground from '@/components/Playground.vue'
import Player from '@/components/Player.vue'
</script>

<template>
  <div class="w-screen h-screen overflow-hidden flex relative">
    <side-bar></side-bar>
    <playground>
      <slot></slot>
    </playground>
    <player></player>
  </div>
</template>