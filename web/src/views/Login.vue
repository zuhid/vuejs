<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const model = ref({
  username: 'user',
  password: 'pass'
});

const onSubmit = () => router.push('/map');
</script>

<template>
  <p v-bind:id="id" v-html="rawHtml"></p>
  <Card title="Login" @onSubmit="onSubmit" saveText="Login" cancelText="">
    <Text label="User Name" v-model="model.username" />
    <Password label="Password" v-model="model.password" />
  </Card>

</template>

<style scoped></style>
