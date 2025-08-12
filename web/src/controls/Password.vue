<template>
  <div class="vc-password">
    <label v-if="label">{{ label }}</label>
    <input type="password" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String, default: '' },
    modelValue: { type: String, default: '' }
  }
};
</script>

<style scoped>
.vc-password {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333;
  }

  input {
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
    outline: none;
    padding: 0.5rem;
  }

  input:focus {
    border-color: var(--primary-color);
  }
}
</style>
