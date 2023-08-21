<script setup>
  import { reactive, ref } from 'vue'

  const counter = ref(0)
  const incrementCounterRef = () => {
    counter.value++;
  }

  const state = reactive({counter: 0})
  const incrementCounterReactive = () => {
    state.counter++;
  }

</script>

<template>
  <div class="bg-white p-4 rounded-md max-w-3xl mx-auto w-11/12">
    <h1 class="font-bold text-left mb-4">Reactive Data Binding</h1>
    <div class="flex flex-col sm:flex-row">
      <div class="border-indigo-100 border-2 mb-3 rounded-md sm:w-6/12 sm:mr-2 sm:mb-0 p-4">
        <p class="mb-2">Counter Ref is: {{ counter }}</p>
        <button
          class="bg-transparent hover:bg-blue-500 w-full text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          @click="incrementCounterRef"
        >
          Increment by 1 Ref
        </button>
      </div>
      <div class="border-indigo-100 border-2 rounded-md sm:w-6/12 sm:ml-2 p-4">
        <p class="mb-2">Counter Reactive is: {{ state.counter }}</p>
        <button
          class="bg-transparent hover:bg-blue-500 w-full text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          @click="incrementCounterReactive"
        >
          Increment by 1 Reactive
        </button>
      </div>
    </div>
  </div>
</template>
