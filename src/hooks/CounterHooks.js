// Example: 1 - Composable without parameter 
import { ref } from 'vue'

export default function useCounter() {

  const count = ref(0)

  function increment() {
    count.value++
  }

  return { count, increment }
}
// --------------------------

// Example: 2 - Composable with Parameter
// import { ref } from 'vue'

// // add incrementBy param with default value
// export default function useCounter(incrementBy=1) {

//   const count = ref(0)

//   function increment() {
//     // use param to increment
//     count.value += incrementBy
//   }

//   return { count, increment }
// }


