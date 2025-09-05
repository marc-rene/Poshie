<script setup>
import { ref } from 'vue'

defineProps({
  ChatRoomID: String,
})

const count = ref(0)
</script>

<template>
  <div class="h-full w-full bg-teal-300">
    Messages Container
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
