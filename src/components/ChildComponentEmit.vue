<script setup>
  defineProps(['counter'])
</script>

<template>
  <p>Counter is: {{ counter }}</p>
  <div class="flex flex-row mt-3">
    <slot></slot>
    <button
      class="bg-red-500 hover:bg-red-700 text-white w-5/12 ml-1 font-bold py-2 px-2 rounded"
      @click="$emit('reset-counter')"
    >
      Reset
    </button>
  </div>

</template>
