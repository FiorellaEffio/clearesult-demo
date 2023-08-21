<script setup>
import { reactive, ref } from 'vue'

const counter = ref(0)
const incrementCounterRef = () => {
  counter.value++;
}

const state = ref({counter: 0})
const incrementCounterReactive = () => {
  state.value.counter++;
}

</script>

<template>
  <h1>Reactive Data Binding</h1>
  <div class="flex flex-col">
    <div>
      <p>Counter Ref is: {{ counter }}</p>
      <button @click="incrementCounterRef">Increment by 1 Ref</button>
    </div>
    <div>
      vs
    </div>
    <div>
      <p>Counter Reactive is: {{ state.counter }}</p>
      <button @click="incrementCounterReactive">Increment by 1 Reactive</button>
    </div>
  </div>
</template>
