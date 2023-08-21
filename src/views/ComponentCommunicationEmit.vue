<script setup>
  import { reactive, ref } from 'vue'
  import ChildComponentEmit from '@/components/ChildComponentEmit.vue';
  const counter = ref(0)
  const incrementCounterRef = () => {
    counter.value++;
  }
  const resetCounter = () => {
    counter.value = 0;
  }
</script>

<template>
  <div class="bg-white p-4 rounded-md max-w-3xl mx-auto w-11/12">
    <h1 class="font-bold text-left mb-4">Component communication (EMIT)</h1>
    <div class="border-indigo-100 mx-auto border-2 rounded-md sm:w-6/12 p-4">
      <ChildComponentEmit :counter="counter" @reset-counter="resetCounter">
        <button
          class="bg-transparent hover:bg-blue-500 w-full text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-1"
          @click="incrementCounterRef"
        >
          Increment by 1 Ref
        </button>
      </ChildComponentEmit>
    </div>
  </div>
</template>
