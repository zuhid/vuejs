<script setup>
import Card from '@/controls/Card.vue';
import TextInput from '@/controls/TextInput.vue';
import { ref } from 'vue';

const username = ref('');
const password = ref('');
</script>

<template>
  <Card title="Login">
    <TextInput label="Username" v-model="username.value" placeholder="Enter username" />
    <TextInput label="Password" v-model="password.value" type="password" placeholder="Enter password" />
  </Card>
</template>

<style scoped></style>
