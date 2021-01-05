<template>
  <div>
    <h2 id="result_block_tipo_piatto" class="text-left">{{ title }}</h2>

    <HorizontalSeparator></HorizontalSeparator>

    <div class="container">
      <div class="row">

        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>

      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from "@/components/RecipeCard";
import HorizontalSeparator from "@/components/HorizontalSeparator";

export default {
  name: 'HomeResultBlock',
  components: {
    HorizontalSeparator,
    RecipeCard
  },
  props: ['title']
}
</script>

<style scoped>
#horizontal-separator {
  background: rgb(157,168,177);
}

#result_block_tipo_piatto {
  color: var(--gray);
}
</style>