<script setup>
import { ref } from 'vue';
import GoogleMap from './GoogleMap.vue';
</script>

<template>
  <GoogleMap />
  <!-- <gmp-map id="gmpId" map-id="DEMO_MAP_ID" center="39.7392,-104.9903" zoom="10">
    <gmp-marker position="39.5946,-104.9339" title="Centennial"></gmp-marker>
  </gmp-map> -->
</template>
<style scoped>
#gmpId {
  display: block;
  margin: 0 auto;
  width: 80%;
  height: 800px
}
</style>
