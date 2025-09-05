<script setup>
import { ref } from 'vue'

defineProps({
Logged_in: Boolean,
})

</script>

<template>
  <div class="bg-red-500 grid grid-cols-4 grid-rows-1 w-full h-full">
    <div id="LOGO_BANNER">LOGO HERE</div>
    <div id="SETTINGS_QUICK">SETTINGS</div>
    <div id="HELP_QUICK">HELP</div>
    <div id="ACCOUNT_QUICK">ACCOUNT</div>
  </div>
</template>

<style scoped></style>
