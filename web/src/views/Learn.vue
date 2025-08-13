<script setup>
import { ref } from 'vue';
const rawHtml = `<span style="color:blue">This should be blue</span>`
const id = 'my-id'
function sayHello() {
  return 'Hello from function';
}
function alertHello() {
  alert('Hello from function');
}
</script>

<template>
  <h1><a href="https://vuejs.org/guide/essentials/template-syntax.html">Template Syntax</a></h1>
  <h2>Raw Html</h2>
  {{ rawHtml }}
  <p v-html="rawHtml"></p>
  <h2>Attribute Bindings</h2>
  <div v-bind:id="id">normal -> v-bind:id="id"</div>
  <div :id="id">shorthand -> :id="id"</div>
  <div :id>same name ->:id</div>
  <h2>Calling Functions</h2>
  <button @click="alertHello">{{ sayHello() }}</button>

  <h1><a href="https://vuejs.org/guide/essentials/reactivity-fundamentals.html">Reactivity Fundamentals</a></h1>
</template>


<style scoped></style>
