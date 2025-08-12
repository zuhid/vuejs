<script setup>
import Login from './views/Login.vue';
import Map from './views/Map.vue';
</script>

<template>
  <router-view />
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  background-color: #f5f5f5;
}


:root {
  --primary-color: rgb(25, 118, 210);
  --font-size-base: 16px;
}
</style>
