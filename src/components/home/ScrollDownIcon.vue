<template>
  <div class="arrow" @click="onClick">
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
name: 'ScrollDownIcon',
  methods: {
    onClick() {
      this.$emit('callback')
    }
  }
}
</script>

<style scoped>

.arrow {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%,-50%);
  cursor: pointer;
}

.arrow span {
  display: block;
  width: 30px;
  height: 30px;
  border-bottom: 5px solid var(--text-color);
  border-right: 5px solid var(--text-color);
  transform: rotate(45deg);
  margin: -10px;
  animation: animate 2s infinite;
}
.arrow span:nth-child(2){
  animation-delay: -0.2s;
}
.arrow span:nth-child(3){
  animation-delay: -0.4s;
}
@keyframes animate {
  0%{
    opacity: 0;
    transform: rotate(45deg) translate(-20px,-20px);
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform: rotate(45deg) translate(20px,20px);
  }
}
</style>