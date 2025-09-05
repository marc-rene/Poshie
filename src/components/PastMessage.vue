<script setup>
import { ref, onMounted } from 'vue'
import { getUsernamesByIds } from '../Firebase'


defineProps({
  chatroomdata: {}
})

const usernames = ref([])

onMounted(async () => {
  var count = 0;
  usernames.value = getUsernamesByIds(chatroomdata.Users)
})
</script>

<template>
  <div class="grid grid-cols-1 grid-rows-2  bg-blue-500">
    <h2 v-if="chatroomdata.Nickname"> {{ chatroomdata.Nickname }}</h2>
    <h2 v-else> Chat with {{ usernames }} </h2>
    
  </div>
</template>

<style scoped></style>
