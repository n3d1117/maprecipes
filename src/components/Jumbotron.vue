<template>
  <div
    id="djumbo"
    class="jumbotron d-flex align-items-center m-0 p-0"
  >
    <div class="container text-center">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Jumbotron'
}
</script>

<style scoped>

#djumbo {
  min-height: calc(100vh - 77px);
  background: transparent;
}

</style>