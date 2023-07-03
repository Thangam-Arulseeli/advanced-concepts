<template>
    <button @click="counter.increment">Clicks: {{ counter.count }}</button>
  </template>
  
  <script>
   import useCounter from '/src/hooks/CounterHooks.js'
  
  export default {
    // Calling the Usecounter hook without parameter 
    setup(){
      const counter = useCounter();
        return { counter }
    }
    }

    // tell Vue to expect 'incBy' prop
   // props: ['incBy'],
    // receive props object
   // setup(props) {
  
      // pass prop as argument      
     // const counter = useCounter(props.incBy)
  
     // return { counter }
    //}
  //}
  </script>