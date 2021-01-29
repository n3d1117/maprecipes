<template>

  <BackgroundLayer>
    <Navbar></Navbar>
    <Jumbotron>
      <slot></slot>
    </Jumbotron>
  </BackgroundLayer>

</template>

<script>
import Navbar from '@/components/Navbar'
import Jumbotron from '@/components/Jumbotron'
import BackgroundLayer from '@/components/BackgroundLayer'

export default {
  name: 'MainLayer',
  components: {
    Navbar, Jumbotron, BackgroundLayer
  }
}
</script>