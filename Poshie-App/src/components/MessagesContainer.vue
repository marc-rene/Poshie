<script setup>
import { onMounted, ref } from 'vue'
import { io } from "socket.io-client"
import { socket } from "../AppSockets"


defineProps({
  ChatRoomID: String,
})
const texts = ref([]);



socket.on('message', text => {
  texts.value.push("Hello!");
})

function Send() {
  console.log("Sent it")
  socket.emit('message', "BONJOUR")
}

onMounted(() =>
{
  socket.connect()
});

const count = ref(0)
</script>

<template>
  <div class="h-full w-full bg-teal-300">
    <h1>Messages Container</h1>

    <ul class="space-y-2">
      <li v-for="text in texts" class="p-3 rounded-lg border bg-white shadow">
        <p>{{ text }}</p>
      </li>
    </ul>

  </div>

  <button @onclick="Send()"> Send </button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
