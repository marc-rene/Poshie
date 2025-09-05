<script setup>
import { ref } from 'vue'

defineProps({
  ChatRoomID: String,
})

const count = ref(0)
</script>

<template>
  <h1>
    Messages Container
  </h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
