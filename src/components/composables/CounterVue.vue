<template>
    <h2> Without Composables </h2>
    <click-counter />
    <hr>
    <hover-counter />
    <h2> Composables (Hooks) - Reuse Code - Script </h2>
    <!-- bind 'incBy' prop -->
    <ClickCounterHook :incBy="10"/>
    <hover-counter-hook />
    <hr />


  </template>
  
  <script>
  import ClickCounter from './ClickCounter.vue'
  import HoverCounter from './HoverCounter.vue'
  import ClickCounterHook from './ClickCounterHook.vue';
  import HoverCounterHook from './HoverCounterHook.vue';

  export default {
    components: {
      ClickCounter,
      HoverCounter,
      ClickCounterHook,
      HoverCounterHook
    }
  }
  </script>