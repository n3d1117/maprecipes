<template>
  <div>
    <h1 class="mt-2 mb-0 ml-3 ml-lg-0 text-left">Crostini di fegatini</h1>
    <HorizontalSeparator></HorizontalSeparator>
    <ul class="mt-3 ml-lg-0 ml-3 pl-4 mb-0 text-left" id="lista_localita">
      <li>Regione: Toscana</li>
      <li>Città: Firenze</li>
    </ul>
  </div>
</template>

<script>
import HorizontalSeparator from "@/components/HorizontalSeparator";

export default {
name: 'RecipeInfo',
  components: {HorizontalSeparator}
}
</script>

<style scoped>

#lista_localita {
  font-size: 27px;
}
</style>