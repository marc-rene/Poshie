<script setup>
import { RouterView } from 'vue-router';
import { auth } from './Firebase';
</script>

<template>
  <h1>
    Yo! we're at {{$route.fullPath}} and {{ auth.currentUser ? auth.currentUser.uid : "NA" }}
  </h1>
  <RouterView></RouterView>

</template>

<style>

</style>
