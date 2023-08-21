<script setup>
defineProps(['message'])
</script>

<template>
  <p>The message is: <span class="text-red-500 font-bold">{{ message }}</span></p>
</template>
