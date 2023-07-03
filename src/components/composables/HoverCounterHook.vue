<template>
    <div @mouseover="increment">Hovers: {{ count }}</div>
  </template>
  
  <script>
  import useCounter from '/src/hooks/CounterHooks.js'
  
  export default {
    setup() {
  
      // destructure into separate constants
      const { count, increment } = useCounter() // Without parameter
   // const { count, increment } = useCounter(5)  // With Parameter
      // return separate constants
      return { count, increment }
    }
  }
  </script>
  
  <style scoped>
  div{background:gainsboro}
  </style>
