<template>
  <div>
    <h1 class="mt-3 mb-0 ml-3 ml-lg-0 text-left">{{ name }}</h1>
    <HorizontalSeparator/>
    <ul class="mt-3 ml-lg-0 ml-3 pl-4 mb-0 text-left" id="lista_localita">
      <li>Regione: {{ region }}</li>
      <li>Città: {{ city }}</li>
    </ul>
  </div>
</template>

<script>
import HorizontalSeparator from "@/components/HorizontalSeparator";

export default {
name: 'RecipeInfo',
  components: {HorizontalSeparator},
  props: ['region', 'city', 'name']
}
</script>

<style scoped>

#lista_localita {
  font-size: 27px;
}

</style>