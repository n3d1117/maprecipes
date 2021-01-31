<template>
  <div class="mb-4">
    <h2 class="result_block_tipo_piatto text-left">{{ title }}</h2>

    <HorizontalSeparator/>

    <div class="container">
      <div class="row">

        <RecipeCard
            v-for="recipe in recipes"
            :key="recipe.dish_id"
            :recipe="recipe"
        />

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

.result_block_tipo_piatto {
  color: var(--gray);
}

</style>