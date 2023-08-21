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
  <!--
    - Watcher Usage: 
    Create a Vue 3 component that displays a counter and a button. 
    When the button is clicked, the counter increments by 1. 
    Implement a watcher that logs a message to the console whenever the counter value becomes an even number.
  -->
  <h1>watcher usage</h1>
  <div class="flex flex-col">
    <div>
      <p>Counter Ref is: {{ counter }}</p>
      <button @click="incrementCounterRef">Increment by 1 Ref</button>
    </div>
  </div>
</template>
