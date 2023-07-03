<template>
    <button @click="increment">Clicks: {{ count }}</button>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup() {
  
      const count = ref(0)
  
      function increment() {
        count.value++
      }
  
      return {  count, increment }
    }
  }
  </script>

  