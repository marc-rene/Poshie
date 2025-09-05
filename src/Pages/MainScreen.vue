<script setup>
import { ref } from 'vue'
import ActionsBar from '../components/ActionsBar.vue'
import PastMessagesContainer from '../components/PastMessagesContainer.vue'
import MessagesContainer from '../components/MessagesContainer.vue'

defineProps({

})

</script>

<template>
  <div class="flex flex-col bg-green-500 w-screen h-screen ">


    <div class="bg-red-100 h-22" id="Log">
      <ActionsBar />
    </div>

    <div class="flex flex-1">
      <div class="h-full w-[20%] shrink-0">
        <PastMessagesContainer />
      </div>
      <div class="h-full flex-1">
        <MessagesContainer />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
