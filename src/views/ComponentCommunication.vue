<script setup>
  import { ref } from 'vue'
  import ChildComponent from '@/components/ChildComponent.vue';

  const message = ref('')
  const generateNewMessage = () => {
    message.value = (Math.random() + 1).toString(36).substring(7);
  }
</script>

<template>
  <div class="bg-white p-4 rounded-md max-w-3xl mx-auto w-11/12">
    <h1 class="font-bold text-left mb-4">Component communication</h1>
    <div class="flex flex-col">
      <div>
        <ChildComponent :message="message"/>
        <button
          class="bg-transparent mt-4 hover:bg-blue-500 w-full text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-1"
          @click="generateNewMessage"
        >
          Send new message
        </button>
      </div>
    </div>
  </div>
</template>
