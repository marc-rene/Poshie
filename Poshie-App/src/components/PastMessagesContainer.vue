<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { auth, app } from '../Firebase'
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import ActionsBar from './ActionsBar.vue'
import PastMessage from './PastMessage.vue';
import { Chatroom } from '../Types';

const db = getFirestore(app)
const chatrooms = ref<Chatroom[]>();
const loading = ref(true);

onMounted(async () => {
  const q = query(
    collection(db, "Chatrooms"),
    where("Users", "array-contains", auth.currentUser?.uid)
  );

  const snap = await getDocs(q);
  chatrooms.value = await snap.docs.map((doc) => ({
    id: doc.id,
    Nickname: doc.data().Nickname,
    Users: doc.data().Users
  }));
  loading.value = false;
});


</script>

<template>
  <div class="bg-amber-500 h-full w-full">
    <!-- show empty -->
    <p v-if="chatrooms?.length === 0">no chatrooms found.</p>

    <!-- loop results -->
    <ul v-else class="space-y-2">
      <li v-for="room in chatrooms" :key="room.id" class="p-3 rounded-lg border bg-white shadow">
        <PastMessage :chatroomdata="room"></PastMessage>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
