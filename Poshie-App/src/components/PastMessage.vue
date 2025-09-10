<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getUsernamesByIds, auth } from '../Firebase'
import { Chatroom } from '../Types';


const { chatroomdata } = defineProps<{ chatroomdata: Chatroom }>()


const users = ref('')

onMounted(async () => {
  if (chatroomdata.Nickname == "ad") {
    users.value = chatroomdata.Nickname
  }
  else {
    const otherUsers = chatroomdata.Users
      .filter((id) => id !== auth.currentUser?.uid)
      .slice(0, 3)
    const usernames = await getUsernamesByIds(otherUsers)
    users.value = usernames.join(', ')
  }
})


</script>

<template>
  <div class="grid grid-cols-1 grid-rows-2  bg-blue-500">
    <!--<h2 v-if="chatroomdata.Nickname"> {{ chatroomdata.Nickname }}</h2>-->
    <h2> Chat with {{ users }} </h2>

  </div>
</template>

<style scoped></style>
