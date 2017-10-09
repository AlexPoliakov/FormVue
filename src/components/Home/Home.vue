<!--Home page app-->

<template>
  <div class='home'>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                message: "Welcome on Home page!"
            }
        }
    }
</script>

<style scoped>
  @import "home.css";
</style>
