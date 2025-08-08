<template>
  <div class="card">
    <div v-if="title" class="card-title">{{ title }}</div>
    <div class="card-content">
      <slot />
    </div>
    <div class="card-actions">
      <slot name="actions">
        <button class="card-btn" @click="$emit('save')">Save</button>
        <button class="card-btn" @click="$emit('cancel')">Cancel</button>
      </slot>
    </div>
  </div>
</template>

<script>
import TextInput from './TextInput.vue';
export default {
  name: 'Card',
  components: { TextInput },
  props: {
    title: { type: String, default: '' }
  },
  emits: ['save', 'cancel'],
};
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin: 0.5rem;
  transition: box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}

.card-title {
  background: rgba(25, 118, 210, 0.6);
  border-radius: 8px 8px 0px 0px;
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
  background: rgb(25, 118, 210);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1.25rem;
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
