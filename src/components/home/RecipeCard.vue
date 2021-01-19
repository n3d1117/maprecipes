<template>
  <div class="col mb-3 col-lg-3 col-6">
    <router-link class="result_block_anchor" :to="'/recipe/' + recipe.dish_id">
      <div class="card result_block_card">
        <div class="card-body result_block_card_body">
          <img class="img-fluid mb-2 result_block_card_body_img"
               :src="require(`@/assets/${recipe.photos[0]}`)"
               :alt="recipe.dish_name"
          >
          <h4 class="card-title mb-0 text-center">{{ recipe.dish_name }}</h4>
          <ul class="text-left mb-0 pb-0 pl-3">
            <li>Regione: {{ recipe.region }}</li>
            <li>Città: {{ recipe.city }}</li>
          </ul>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: ['recipe'],
}
</script>

<style scoped>

.result_block_anchor {
  color: inherit;
  text-decoration: none;
}

.card.result_block_card {
  border-width: 0;
  background-color: transparent;
}

.card-body.result_block_card_body {
  padding: 11px;
  border-radius: 11px;
  background-color: var(--main-color);
  box-shadow: var(--softer-shadow);
  border: var(--soft-border);
}

.result_block_card_body_img {
  border-radius: 11px;
  box-shadow: var(--soft-shadow);
}

</style>
