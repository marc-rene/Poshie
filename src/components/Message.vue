<script setup>
import { ref } from 'vue'

defineProps({
  From: String,
  From_Thumbnail_URL: String,
  Message_Text: String,

})

</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>

</style>
