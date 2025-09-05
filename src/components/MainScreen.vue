<script setup>
import { ref } from 'vue'
import ActionsBar from './ActionsBar.vue'
import PastMessagesContainer from './PastMessagesContainer.vue'
import MessagesContainer from './MessagesContainer.vue'

defineProps({

})

</script>

<template>
  <div class="grid grid-cols-2 grid-rows-2 gap-4 bg-green-500 w-screen h-screen ">


    <div class="bg-red-100 col-span-2 shrink" id="Log">
      <ActionsBar/>
    </div>

    <div class="h-full">
      <PastMessagesContainer></PastMessagesContainer>
    </div>
    <div class="h-full">
      <MessagesContainer></MessagesContainer> 
    </div>
  </div>
</template>

<style scoped></style>
