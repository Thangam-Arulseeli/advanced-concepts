// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// createApp(App).use(router).mount('#app')
 // ---------------------------- 

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// // createApp(App).mount('#app')
// const app=createApp(App);
// app.use(router);

// app.directive("size", {
//     bind(el){
//       el.style.fontSize="100px";
//     }
// })

// app.directive("size", {
//     bind(el,binding){
//       if (binding.value == 'small')
//       {
//         el.style.fontSize="50px";
//       } else if (binding.value == 'big')
//       {
//         el.style.fontSize="200px";
//       }else { 
//         el.style.fontSize="100px";
//       }
//     }
// })

// app.mount('#app');
// --------------------------------

// import Vue from 'vue';
// import App from './App.vue';
// Vue.directive("size", {
//          bind(el){
//            el.style.fontSize="200px";
//          }});
//          Vue.config.productionTip = false;
// new Vue({
//     render: h => h(App),
// }).$mount('#app');

// -----------------------------
//import Vue from 'vue';
import { createApp } from 'vue';
 import App from './App.vue'
 import router from './router'

// createApp(App).use(router).mount('#app')
 // ---------------------------- 

 //const app = Vue.createApp({App});
 const app = createApp(App);
 app.directive("size", {
         bind(el,binding){
           if (binding.value == 'small')
          {
            el.style.fontSize="50px";
          } else if (binding.value == 'big')
          {
            el.style.fontSize="200px";
          }else { 
            el.style.fontSize="100px";
          }
        }
    })
     app.use(router)
    app.mount('#app');
  //  createApp(App).use(router).mount('#app') 
// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// // createApp(App).mount('#app')
// const app=createApp(App);
// app.use(router);