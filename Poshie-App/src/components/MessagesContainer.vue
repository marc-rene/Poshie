<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { io } from "socket.io-client"
import { socket } from "../AppSockets"
import { auth } from '../Firebase'
import type { Chats } from "../Types"
import { stringifyQuery } from 'vue-router'

const props = defineProps({
  ChatRoomID: String,
})
const texts = ref(['']);

const inputText = ref('')

socket.on('message', text => {
  texts.value.push(text);
})

function Send() {
  console.log("Sent it")
  let new_msg: Chats = {
    UTCstamp: undefined,
    SpeakerID: auth?.currentUser?.uid,
    Original_Message: inputText.value,
    Edited_Message: "",
  };
  socket.emit('message', "5ku4P1Mp62Zy7z0CXg3Z", new_msg)
}

onMounted(() => {
  socket.connect()
});


</script>

<template>
  <div class="h-full w-full bg-teal-300">
    <h1>Messages Container</h1>

    <ul class="space-y-2">
      <li v-for="text in texts" class="p-3 rounded-lg border shadow">
        <p>{{ text }}</p>
      </li>
    </ul>

  </div>
  <input type="text" v-model="inputText" class="bg-gray-700"></input>
  <button @click="Send"> Send </button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
