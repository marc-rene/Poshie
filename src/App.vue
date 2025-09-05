<script setup>
import MainScreen from './Pages/MainScreen.vue';
import LoginPage from './Pages/LoginPage.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <h1>
    Yo! we're at {{$route.fullPath  }}
  </h1>
  <RouterView></RouterView>

</template>

<style>

</style>
