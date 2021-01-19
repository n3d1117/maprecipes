<template>

  <BackgroundLayer>
    <GeoRecipesNavbar></GeoRecipesNavbar>
    <Jumbotron>
      <slot></slot>
    </Jumbotron>
  </BackgroundLayer>

</template>

<script>
import GeoRecipesNavbar from '@/components/GeoRecipesNavbar'
import Jumbotron from '@/components/Jumbotron'
import BackgroundLayer from '@/components/BackgroundLayer'

export default {
  name: 'MainLayer',
  components: {
    GeoRecipesNavbar, Jumbotron, BackgroundLayer
  }
}
</script>