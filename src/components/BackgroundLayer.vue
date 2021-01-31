<template>
  <div id="landing">
    <slot />
  </div>
</template>

<script>
export default {
name: 'BackgroundLayer'
}
</script>

<style scoped>

#landing {
  background: url("../assets/bg.png") no-repeat;
  background-size: cover;
}

</style>