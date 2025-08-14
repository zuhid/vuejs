<script setup>

import { defineProps, defineEmits, useAttrs } from 'vue';

const props = defineProps({
  title: { type: String, default: '' },
  saveText: { type: String, default: 'Save' },
  cancelText: { type: String, default: 'Cancel' }
})
</script>

<template>
  <div class="card">
    <div v-if="title" class="card-title">{{ title }}</div>
    <div class="card-content">
      <slot />
    </div>
    <div class="card-actions">
      <slot name="actions">
        <button v-if="saveText.length > 0" class="card-btn" @click="$emit('onSubmit')">{{ saveText }}</button>
        <button v-if="cancelText.length > 0" class=" card-btn" @click="$emit('onCancel')">{{ cancelText }}</button>
      </slot>
    </div>
  </div>
</template>


<style scoped>
.card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin: 0.5rem;
  transition: box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}

.card-title {
  background: var(--primary-color);
  border-radius: 10px 10px 0px 0px;
  font-size: 1.25rem;
  font-weight: 600;
  color: #000;
  padding: 0.5rem;
}

.card-content {
  padding: 0.5rem;
  flex: 1;
}

.card-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 0.5rem;
}

.card-btn {
  background: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}

.card-btn:hover {
  background: #1565c0;
}

.card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}
</style>
