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
  <!--
    - Component Communication with emit:
    Create a Vue 3 parent-child component setup. 
    The parent component should have a button that increments a counter when clicked. 
    The child component should display the counter value received from the parent and have a button to reset the counter back to zero. 
    Implement communication between the child and parent components using the emit function.
  -->
  <h1>component communication with emit</h1>
  <div class="flex flex-col">
    <div>
      <p>Counter is: {{ counter }}</p>
      <ChildComponentEmit :counter="counter" @reset-counter="resetCounter"/>
      <button @click="incrementCounterRef">Increment by 1 Ref</button>
    </div>
  </div>
</template>
