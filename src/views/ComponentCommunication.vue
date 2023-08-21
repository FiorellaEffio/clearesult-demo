<script setup>
import { ref } from 'vue'
import ChildComponent from '@/components/ChildComponent.vue';

const message = ref('')
const generateNewMessage = () => {
  message.value = (Math.random() + 1).toString(36).substring(7);
}

</script>

<template>
  <!--
  - Component Communication: 
  Create two Vue 3 components - a parent and a child component. 
  The parent component should have a button; when the button is clicked, it should send a message to the child component. 
  The child component should display the received message.-->
  <h1>component communication</h1>
  <div class="flex flex-col">
    <div>
      <ChildComponent :message="message"/>
      <button @click="generateNewMessage">Send new message</button>
    </div>
  </div>
</template>
