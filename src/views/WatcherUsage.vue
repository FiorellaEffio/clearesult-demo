<script setup>
  import { ref, watch } from 'vue'

  const counter = ref(0)
  const incrementCounterRef = () => {
    counter.value++;
  }

  watch(counter, () => {
    if(counter.value % 2 === 0) {
      console.log('It is an even number! ', counter.value);
    }
  })
</script>

<template>
  <div class="bg-white p-4 rounded-md max-w-3xl mx-auto w-11/12">
    <h1 class="font-bold text-left mb-4">Watcher usage</h1>
    <div class="border-indigo-100 mx-auto border-2 rounded-md sm:w-6/12 p-4">
      <p class="mb-3">Counter is: {{ counter }}</p>
      <button
        class="bg-transparent hover:bg-blue-500 w-full text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-1"
        @click="incrementCounterRef"
      >
        Increment by 1 Ref
      </button>
    </div>
  </div>
</template>
