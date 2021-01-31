<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz');
@import './assets/style.css';

#app {
  font-family: var(--main-font)
}

</style>