<template>
  <div class="mb-4">
    <h2 id="result_block_tipo_piatto" class="text-left">{{ title }}</h2>

    <HorizontalSeparator></HorizontalSeparator>

    <div class="container">
      <div class="row">

        <RecipeCard
            v-for="recipe in recipes"
            v-bind:key="recipe.dish_id"
            v-bind:recipe="recipe"
        ></RecipeCard>

      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from "@/components/home/RecipeCard";
import HorizontalSeparator from "@/components/HorizontalSeparator";

export default {
  name: 'HomeResultBlock',
  components: {
    HorizontalSeparator,
    RecipeCard
  },
  props: ['title', 'recipes']
}
</script>

<style scoped>

#result_block_tipo_piatto {
  color: var(--gray);
}

</style>