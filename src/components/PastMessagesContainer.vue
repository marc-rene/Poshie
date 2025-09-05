<script setup>
import { ref } from 'vue'
import ActionsBar from './ActionsBar.vue'

defineProps({

})

const count = ref(0)
</script>

<template>
  <div class="bg-amber-500 h-full w-full">
    ALL PAST MESSAGES
  </div>
</template>

<style scoped></style>
