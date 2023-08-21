<script setup>
defineProps(['counter'])
</script>

<template>
  <p>Counter is: {{ counter }}</p>
  <button @click="$emit('reset-counter')">Reset</button>

</template>
