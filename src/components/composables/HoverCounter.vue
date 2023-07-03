<template>
    <div @mouseover="increment">Hovers: {{ count }}</div>
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
  
  <style scoped>
  div{background:gainsboro}
  </style>