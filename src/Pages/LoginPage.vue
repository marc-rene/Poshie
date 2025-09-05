<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged  } from 'firebase/auth'
import { auth } from '../Firebase'

defineProps({

})
const email = ref('')
const password = ref('')
const error = ref('')
const isRegister = ref(false)
const router = useRouter()

const submit = async () => {
  error.value = ''
  try {
    if (isRegister.value) {
      await createUserWithEmailAndPassword(auth, email.value, password.value)
    } 
    else {
      await signInWithEmailAndPassword(auth, email.value, password.value)
    }
    router.push('/')
  } 
  catch (e) {
    error.value = e.message
  }
}

onAuthStateChanged(auth, (user) => {
  if (user) 
  {
    router.push('/')
  }
})

</script>

<template>
    <h1>LOG IN PAGE</h1> 
    <div class="flex items-center justify-center h-screen">
    <div class="w-full max-w-sm bg-gray-300 dark:bg-gray-700 p-6 gap-4 rounded shadow">
      <h1 class="text-xl font-bold mb-8 text-center">{{ isRegister ? 'Register' : 'Login' }}</h1>
      <form @submit.prevent="submit" class="space-y-8">
        
        <input v-model="email" type="email" placeholder="Email" class="w-full p-4 border rounded" />
        
        <input v-model="password" type="password" placeholder="Password" class="w-full p-4 border rounded" />
        
        <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
        <button type="submit" class="w-full my-3 bg-blue-500 dark:text-white rounded">
          {{ isRegister ? 'Register' : 'Login' }}
        </button>
      </form>
      <button @click="isRegister = !isRegister"class="w-full my-3 bg-blue-500 dark:text-blue-400 text-blue-800 rounded underline">
        {{ isRegister ? 'Already a member? Login' : 'Need an account? Register' }}
      </button>
    </div>
  </div>
</template>
