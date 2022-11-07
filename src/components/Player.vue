<script setup>
import { computed, ref } from 'vue'
import { BackwardIcon, ForwardIcon, PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/vue/20/solid'
const isPlay = ref(true)
const voice = ref(50)
const prevVoice = ref(0)
const voiceBar = computed(() => {
  return `width: ${voice.value};`
})
const handleVoice = (e) => {
  console.log(e);
}
const handleVoiceOpen = () => {
  voice.value = prevVoice.value
}
const handleVoiceClose = () => {
  prevVoice.value = voice.value
  voice.value = 0
}
</script>

<template>
  <div class="w-full h-12 bg-white absolute bottom-0 left-0 flex justify-between items-center px-4">
    <div class="flex items-center">
      <div class="w-10 h-10 bg-stone-200 rounded-md"></div>
      <div class="ml-3">
        <div class="text-base">一路向北</div>
        <div class="text-xs">周杰伦</div>
      </div>
    </div>
    <div class="flex justify-center items-center text-stone-600">
      <backward-icon class="h-5 cursor-pointer"></backward-icon>
      <div
        class="w-10 h-10 border flex justify-center items-center mx-8 rounded-full bg-stone-200 cursor-pointer"
        @click="isPlay = !isPlay"
      >
        <play-icon class="h-5 text-white" v-if="isPlay"></play-icon>
        <pause-icon class="h-5 text-white" v-else></pause-icon>
      </div>
      <forward-icon class="h-5 cursor-pointer"></forward-icon>
    </div>
    <div class="flex justify-center items-center">
      <speaker-x-mark-icon
        class="h-5 cursor-pointer"
        v-if="voice === 0"
        @click="handleVoiceOpen"
        ></speaker-x-mark-icon>
      <speaker-wave-icon
        class="h-5 cursor-pointer"
        v-else
        @click="handleVoiceClose"
      ></speaker-wave-icon>
      <div
        class="w-24 h-2 mx-2 bg-stone-200 rounded-full overflow-hidden cursor-pointer"
        @click="handleVoice"
      >
        <div
          class="h-full bg-stone-400"
          :style="voiceBar"
          ref="voiceBar"
        ></div>
      </div>
    </div>
  </div>
</template>