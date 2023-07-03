<template>
<div id="app">
    <div class="demo-login">
      <div v-if="isUserLoggedIn" class="login-success" >User Logged in!</div>
      <button v-else class="login-btn" v-on="clickMe">Login to continue</button>
    </div>
  </div>

  <div id="app">
    <div v-if="isUserLoggedIn" class="login-success">User Logged in!</div>
    <button v-on:click="login" v-else class="login-btn">Login to continue</button>
</div>

</template>

<script>
export default{
    data(){
        return{
            isUserLoggedIn:false
        }
    },
    methods: {
        clickMe(){
            this.isUserLoggedIn = !this.isUserLoggedIn 
        }
    }
}
</script>