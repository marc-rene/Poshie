<script setup>
import { ref } from 'vue'
import ActionsBar from './ActionsBar.vue'

defineProps({

})

const count = ref(0)
</script>

<template>
  <div class="grid grid-cols-1 gap-4 bg-amber-500">
    ALL PAST MESSAGES
  </div>
</template>

<style scoped></style>
